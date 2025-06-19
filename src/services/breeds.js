import { apiClient } from "./config";

export const apiGetBreeds = async () => apiClient.get("/breeds");

export const apiGetBreedDetail = async (id) => apiClient.get(`/breeds/${id}`);

export const apiGetGroups = async () => apiClient.get("/groups")
export const apiGetFacts = async () => apiClient.get("/facts")