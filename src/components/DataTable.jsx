import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import * as XLSX from "xlsx";
import { getCompany } from "../services/company";
import "../styles/dataTable.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


function DataTable() {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;

  /**
   * Consume el endpoint de empresas.
   */
  useEffect(() => {
    const fetchCompanies = async () => {
      const data = await getCompany();

      if (data.length > 0) {
        setCompanies(data);
      } else {
        setCompanies([]);
      }
    };
    fetchCompanies();
  }, []);

  /**
   * Filtra por empresas o por area.
   */
  const filteredPeople = companies.filter(
    (person) =>
      person.name_company.toLowerCase().includes(search.toLowerCase()) ||
      person.area.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredPeople.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredPeople.length / rowsPerPage);

  /**
   * Función para cambiar a la página anterior si no es la primera.
   */
  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  /**
   * Función para avanzar a la siguiente página si no es la última.
   */
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  /**
   *  Exporta la tabla actual a un archivo Excel.
   */
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(companies);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Colaboradores");
    XLSX.writeFile(workbook, "colaboradores.xlsx");
  };

  return (
    <Container className="data-table">
      <h2 className="data-table__title">Portal de Colaboradores</h2>
      <Form.Control
        type="text"
        placeholder="Filtrar por empresa o área..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        className="data-table__search"
      />
      <Button className="data-table__export-button" onClick={exportToExcel}>
        Exportar a Excel
      </Button>
      <div className="data-table__wrapper">
        <Table striped bordered hover className="text-center">
          <thead className="bg-light">
            <tr>
              <th>Empresa</th>
              <th>Área</th>
              <th>RUT</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Profesión</th>
              <th>Sueldo</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.length > 0 ? (
              currentRows.map((row, index) => (
                <tr key={index}>
                  <td>{row.name_company}</td>
                  <td>{row.area}</td>
                  <td>{row.rut_worked}</td>
                  <td>{row.name_worked}</td>
                  <td>{row.age}</td>
                  <td>{row.position}</td>
                  <td>{row.salary}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No se encontraron resultados</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
      {totalPages > 1 && (
        <div className="data-table__pagination">
          <Button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="data-table__pagination-button"
          >
            <FaArrowLeft />
          </Button>
          <span className="data-table__pagination-text">
            Página {currentPage} de {totalPages}
          </span>
          <Button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="data-table__pagination-button"
          >
            <FaArrowRight />
          </Button>
        </div>
      )}
    </Container>
  );
}

export default DataTable;
