import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { apiFetch } from "./axiosConfig";
import { useGlobalContext } from "./context";

export const useFetchImages = () => {
  const { searchTerm } = useGlobalContext();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const { data: { results } } = await apiFetch(`/search/photos?client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}&page=1&query=${searchTerm}`)
      return results
    }
  });

  return { isLoading, isError, data, error };
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: (item) => apiFetch("/", {
      title: item
    }),
    onError: (error) => {

    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    }
  });

  return { createTask, isLoading };
};