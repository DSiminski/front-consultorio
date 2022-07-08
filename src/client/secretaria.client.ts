import { PageRequest } from "@/model/page-request";
import { PageResponse } from "@/model/page.response";
import { Secretaria } from "@/model/secretaria.model";
import axios, { AxiosInstance } from "axios";

export class SecretariaClient {
    private axiosClient : AxiosInstance

    
  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api/secretarias",
      headers: { "Content-type": "application/json" },
    });
  }
  public async getSecretariasById(id: number): Promise<Secretaria> {
    try {
      return (await this.axiosClient.get<Secretaria>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async getSecretarias(
    pageRequest: PageRequest
  ): Promise<PageResponse<Secretaria>> {
    try {
      let requestPath = "";

      requestPath += `?page=${pageRequest.currentPage}`;
      requestPath += `&size=${pageRequest.pageSize}`;
      requestPath += `&sort=${
        pageRequest.sortField === undefined ? "" : pageRequest.sortField
      },${pageRequest.direction}`;

      return (
        await this.axiosClient.get<PageResponse<Secretaria>>(requestPath, {
          params: { filtros: pageRequest.filter },
        })
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async postSecretaria(secretaria: Secretaria): Promise<void> {
    try {
      return await this.axiosClient.post("/", secretaria);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async putSecretaria(secretaria: Secretaria): Promise<void> {
    try {
      return (await this.axiosClient.put(`/${secretaria.id}`, secretaria)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async desativarSecretarias(secretaria: Secretaria): Promise<void> {
    try {
      return (
        await this.axiosClient.put(`/desativar/${secretaria.id}`, secretaria)
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async findByFiltrosPaginado(pageRequest: PageRequest): Promise<PageResponse<Secretaria>> {
    try {
        let requestPath = ''

        requestPath += `?page=${pageRequest.currentPage}`
        requestPath += `&size=${pageRequest.pageSize}`
        requestPath += `&sort=${pageRequest.sortField === undefined ? '' : pageRequest.sortField},${pageRequest.direction}`

        return (await this.axiosClient.get<PageResponse<Secretaria>>(requestPath, { params: { filtros: pageRequest.filter } })).data
    } catch (error:any) { 
        return Promise.reject(error.response) 
    }
}
}