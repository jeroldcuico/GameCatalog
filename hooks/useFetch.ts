import { useEffect, useState } from "react";

export function useFetch<T = any>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState<string | null>(null);

  // Fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch");

        const json = await res.json();
        setData(json); // Set the initial data
        setNextPage(json.next || null); // Set the pagination link for next data
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Only fetch when `url` changes

  // Infinite scroll effect
  useEffect(() => {
    const handleScroll = () => {
      // Check if we have reached the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (nextPage && !loading) {
          setLoading(true);  // Start loading new data

          fetch(nextPage)
            .then((response) => response.json())
            .then((newData) => {
              setData((prevData: any) => {
                // Append the new results to the existing ones, without replacing them
                if (prevData) {
                  return {
                    ...prevData,  // Keep other properties intact (if any)
                    results: [
                      ...(prevData.results || []),  // Append the new results
                      ...newData.results
                    ]
                  };
                }
                return newData;  // If no previous data, just return new data
              });
              setNextPage(newData.next || null); // Update the next page URL for pagination
            })
            .catch((err) => {
              setError(err.message); // Handle any errors that occur
            })
            .finally(() => {
              setLoading(false); // End loading
            });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nextPage, loading]);  // Re-run effect if `nextPage` or `loading` changes

  return { data, loading, error };
}
