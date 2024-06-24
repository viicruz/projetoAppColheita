import axios from 'axios';

export class SearchCepService {
    public async execute(cep: string): Promise<any> {
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error(error);
            throw new Error('Erro ao buscar CEP.');
        }
    }
}
