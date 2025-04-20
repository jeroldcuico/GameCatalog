import { NextResponse } from "next/server";

// Ensure you specify a proper type for the API_KEY and queryParams
const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;
const BASE_URL = "https://api.rawg.io/api";

// Reusable function to fetch data from any endpoint
export async function fetchData(
  endpoint: string,
  queryParams: Record<string, string | number | boolean> = {} // Specific type
) {
  try {
    // Ensure API key is available
    if (!API_KEY) {
      throw new Error(
        "API_KEY is missing. Please check your environment variables."
      );
    }

    const params = new URLSearchParams({ key: API_KEY, ...queryParams });
    const url = `${BASE_URL}/${endpoint}?${params.toString()}`;

    // Fetch data from the API
    const response = await fetch(url);

    // Check if the response is OK (status code 200)
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Failed to fetch data from ${endpoint}. Error: ${errorData?.detail || "Unknown error"
        }`
      );
    }

    // Parse and return the JSON response
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error(error); // Log the error for debugging

    // Return a structured error response
    return NextResponse.json(
      { error: error.message || "Failed to fetch data" },
      { status: 500 }
    );
  }
}
