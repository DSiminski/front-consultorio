import { Paciente } from "@/model/paciente.model";
import { PageRequest } from "@/model/page-request";
import { PageResponse } from "@/model/page.response";
import axios, { AxiosInstance } from "axios";

export class PacienteClient {
cadastrar(paciente: Paciente) {
throw new Error('Method not implemented.');
}
editar(paciente: Paciente) {
throw new Error('Method not implemented.');
}
desativar(paciente: Paciente) {
throw new Error('Method not implemented.');
}
findById(id: number) {
throw new Error('Method not implemented.');
}
    private axiosClient : AxiosInstance

    
  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api/pacientes",
      headers: { "Content-type": "application/json" },
    });
  }

  public async getPacientesById(id: number): Promise<Paciente> {
    try {
      return (await this.axiosClient.get<Paciente>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async getPacientes(
    pageRequest: PageRequest
  ): Promise<PageResponse<Paciente>> {
    try {
      let requestPath = "";

      requestPath += `?page=${pageRequest.currentPage}`;
      requestPath += `&size=${pageRequest.pageSize}`;
      requestPath += `&sort=${
        pageRequest.sortField === undefined ? "" : pageRequest.sortField
      },${pageRequest.direction}`;

      return (
        await this.axiosClient.get<PageResponse<Paciente>>(requestPath, {
          params: { filtros: pageRequest.filter },
        })
      ).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async postPaciente(paciente: Paciente): Promise<void> {
    try {
      return await this.axiosClient.post("/", paciente);
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async putPaciente(paciente: Paciente): Promise<void> {
    try {
      return (await this.axiosClient.put(`/status/${paciente.id}`, paciente)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async desativarPacientes(paciente: Paciente): Promise<void> {
    try {
      return (await this.axiosClient.put(`/status/disable/${paciente.id}`, paciente))
        .data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
  public async findByFiltrosPaginado(pageRequest: PageRequest): Promise<PageResponse<Paciente>> {
    try {
        let requestPath = ''

        requestPath += `?page=${pageRequest.currentPage}`
        requestPath += `&size=${pageRequest.pageSize}`
        requestPath += `&sort=${pageRequest.sortField === undefined ? '' : pageRequest.sortField},${pageRequest.direction}`

        return (await this.axiosClient.get<PageResponse<Paciente>>(requestPath, { params: { filtros: pageRequest.filter } })).data
    } catch (error:any) { 
        return Promise.reject(error.response) 
    }
}
}