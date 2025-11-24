import api from ".";
import { ApiResponse } from "../types/apiResponse";
import { ServiceResult } from "../types/serviceResult";
export interface CommisionItem {
  orderId: string | number;
  internalPartnerId: string | number;
  commissionAmount: number;
  status: string;
}

export interface AggregatedCommision {
  totalAmount: number;
  totalCount: number;
}

export interface CommisionReportResponse {
  commisions: CommisionItem[];
  aggregated: AggregatedCommision;
}

export const getCommisionReports = async (params: {
  page?: number;
  limit?: number;
  search?: string;
}): Promise<ServiceResult<CommisionReportResponse>> => {
  try {
    const queryParams = new URLSearchParams();

    if (params.search) queryParams.append("search", params.search);
    if (params.page) queryParams.append("page", String(params.page));
    if (params.limit) queryParams.append("limit", String(params.limit));

    const response = await api.get<ApiResponse<CommisionReportResponse>>(
      `/reports/commissions?${queryParams.toString()}`
    );

    return {
      success: true,
      data: response?.data?.data,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || "Something went wrong",
    };
  }
};
