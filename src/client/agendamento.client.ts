import { PageRequest } from "@/model/page-request";
import { PageResponse } from "@/model/page.response";
import axios, { AxiosInstance } from "axios";
import { Agendamento } from "@/model/agendamento.model";

export class AgendamentoClient {
    private axiosClient: AxiosInstance;
  
    constructor() {
      this.axiosClient = axios.create({
        baseURL: "http://localhost:8080/api/agendamentos",
        headers: { "Content-type": "application/json" },
      });
    }
    public async getAgendasById(id: number): Promise<Agendamento> {
        try {
          return (await this.axiosClient.get<Agendamento>(`/${id}`)).data;
        } catch (error: any) {
          return Promise.reject(error.response);
        }
      }
    
      public async getAgendas(
        pageRequest: PageRequest
      ): Promise<PageResponse<Agendamento>> {
        try {
          let requestPath = "";
    
          requestPath += `?page=${pageRequest.currentPage}`;
          requestPath += `&size=${pageRequest.pageSize}`;
          requestPath += `&sort=${
            pageRequest.sortField === undefined ? "" : pageRequest.sortField
          },${pageRequest.direction}`;
    
          return (
            await this.axiosClient.get<PageResponse<Agendamento>>(requestPath, {
              params: { filtros: pageRequest.filter },
            })
          ).data;
        } catch (error: any) {
          return Promise.reject(error.response);
        }
      }
    
      public async postAgenda(agendamento: Agendamento): Promise<void> {
        try {
          return await this.axiosClient.post("/", agendamento);
        } catch (error: any) {
          return Promise.reject(error.response);
        }
      }
    
      public async putAgendamento(agendamento: Agendamento): Promise<void> {
        try {
          return (await this.axiosClient.put(`/${agendamento.id}`, agendamento)).data;
        } catch (error: any) {
          return Promise.reject(error.response);
        }
      }
    
      public async desativarAgendas(agendamento: Agendamento): Promise<void> {
        try {
          return (await this.axiosClient.put(`/desativar/${agendamento.id}`, agendamento))
            .data;
        } catch (error: any) {
          return Promise.reject(error.response);
        }
      }
}
