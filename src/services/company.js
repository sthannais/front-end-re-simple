/**
 *  @param {String|Number} id
 */

export const getCompany = async () => {
    try {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        if (!baseUrl) throw new Error("VITE_BASE_URL no está definido.");
        const url = `${baseUrl}/company`;
        const res = await fetch(url, {
            method: 'GET',
        });

        if (!res.ok) throw new Error('Error al obtener datos');

        const dataResult = await res.json();
        return dataResult;
    } catch (error) {
        console.error('Error en getCompany:', error);
        return [];
    }
};
