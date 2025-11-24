export const handleApiError = (error: any): never => {
  if (error.response) {
    throw new Error(error.response.data?.message || "Server error");
  }
  throw new Error("Network error");
};
