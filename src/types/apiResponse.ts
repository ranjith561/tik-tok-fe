export interface ApiPagination {
  page: number;
  limit: number;
}

export interface ApiAggregated {
  totalCount: number;
  totalAmount: number;
}

export interface ApiResponse<T> {
  message: string;
  success: boolean;
  pagination?: ApiPagination;
  data: T;
}
