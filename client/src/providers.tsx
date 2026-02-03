// import { AuthUIProvider } from "@daveyplate/better-auth-ui"
// import { authClient } from "@/lib/auth-client"
// import { useNavigate, NavLink } from "react-router-dom"

// export function Providers({ children }: { children: React.ReactNode }) {
//   const navigate = useNavigate()

//   return (
//       <AuthUIProvider
//         authClient={authClient}
//         navigate={navigate}
//         Link={(props) => <NavLink {...props}  to={props.href}/>}
//       >
//           {children}
//       </AuthUIProvider>
//     )

// }
import { AuthProvider } from "better-auth/react";
import { AuthUIProvider } from "@daveyplate/better-auth-ui";
import { authClient } from "@/lib/auth-client";
import { useNavigate, NavLink } from "react-router-dom";

export function Providers({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <AuthProvider client={authClient}>
      <AuthUIProvider
        authClient={authClient}
        navigate={navigate}
        Link={(props) => <NavLink {...props} to={props.href} />}
      >
        {children}
      </AuthUIProvider>
    </AuthProvider>
  );
}
