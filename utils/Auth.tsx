import { userData } from "@/redux/slices/AuthReducer";

export const checkAuth = async (
  dispatch: any,
  options?: {
    setIsLogedIn?: React.Dispatch<React.SetStateAction<boolean>>,
    setCart?: React.Dispatch<React.SetStateAction<any[]>>,
  }
) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/check-auth",
      {
        credentials: "include",
      }
    );

    if (response.ok) {
      const data = await response.json();

      if (data.isLogedIn) {
        dispatch(userData(data.user));
        options?.setIsLogedIn?.(true);
        options?.setCart?.(data.cart);
      } else {
        options?.setIsLogedIn?.(false);
        console.log("No user found");
      }
    }
  } catch (error) {
    console.log("Auth check failed", error);
  }
};
