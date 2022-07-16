import { Medico } from "@/model/medico.model";
import { PageRequest } from "@/model/page-request";
import { PageResponse } from "@/model/page.response";
import axios, { AxiosInstance } from "axios";

export class MedicoClient {
    private axiosClient : AxiosInstance

    
  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api/medicos",
      headers: { "Content-type": "application/json" },
    });
  }

  public async getMedicosById(id: number): Promise<Medico> {
    try {
      return (await this.axiosClient.get<Medico>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async getMedicos(
    pageRequest: PageRequest
  ): Promise<PageResponse<Medico>> {
    try {
      let requestPath = "";

      requestPath += `?page=${pageRequest.currentPage}`;
      requestPath += `&size=${pageRequest.pageSize}`;
      requestPath += `&sort=${
        pageRequest.sortField === undefined ? "" : pageRequest.sortField
      },${pageRequest.direction}`;

      return (
        await this.axiosClient.get<PageResponse<Medico>>(requestPath, {
          params: { filtros: pageRequest.filter },
        })
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async postMedico(medico: Medico): Promise<void> {
    try {
      return await this.axiosClient.post("/", medico);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async putMedico(medico: Medico): Promise<void> {
    try {
      return (await this.axiosClient.put(`/status/${medico.id}`, medico)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async desativarMedicos(medico: Medico): Promise<void> {
    try {
      return (await this.axiosClient.put(`/disable/${medico.id}`, medico))
        .data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}