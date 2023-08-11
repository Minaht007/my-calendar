import { React } from "react";

export const SvgGenerater = ({ id }) => {
  switch (id) {
    case "cross":
      return (
        <svg
          id="cross"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>cross</title>
          <path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path>
        </svg>
      );
    case "circle-dot":
      return (
        <svg
          id="circle-dot"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>circle-dot</title>
          <path
            fill="none"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-miterlimit="4"
            stroke-width="2"
            stroke="#000"
            d="M29.333 16c0 7.364-5.97 13.333-13.333 13.333s-13.333-5.97-13.333-13.333c0-7.364 5.97-13.333 13.333-13.333s13.333 5.97 13.333 13.333z"
          ></path>
          <path
            fill="none"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-miterlimit="4"
            stroke-width="2"
            stroke="#000"
            d="M17.333 16c0 0.736-0.597 1.333-1.333 1.333s-1.333-0.597-1.333-1.333c0-0.736 0.597-1.333 1.333-1.333s1.333 0.597 1.333 1.333z"
          ></path>
        </svg>
      );
    case "home3":
      return (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>home3</title>
          <path d="M32 19l-6-6v-9h-4v5l-6-6-16 16v1h4v10h10v-6h4v6h10v-10h4z"></path>
        </svg>
      );
    case "plus":
      return (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>plus</title>
          <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
        </svg>
      );
    case "milestone-right":
      return (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>milestone-thin-border</title>
          <path
            fill="none"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-miterlimit="4"
            stroke-width="1"
            stroke="#000"
            d="M24 8h-17.333c-1.473 0-2.667 1.194-2.667 2.667v0 4c0 1.473 1.194 2.667 2.667 2.667v0h17.333l5.333-4.667-5.333-4.667z"
          ></path>
          <path
            fill="none"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-miterlimit="4"
            stroke-width="1"
            stroke="#000"
            d="M16 17.333v10.667"
          ></path>
          <path
            fill="none"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-miterlimit="4"
            stroke-width="1"
            stroke="#000"
            d="M16 4v4"
          ></path>
        </svg>
      );
    case "milestone-left":
      return (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          transform="scale(-1, 1)"
        >
          <title>milestone-thin-border</title>
          <path
            fill="none"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-miterlimit="4"
            stroke-width="1"
            stroke="#000"
            d="M24 8h-17.333c-1.473 0-2.667 1.194-2.667 2.667v0 4c0 1.473 1.194 2.667 2.667 2.667v0h17.333l5.333-4.667-5.333-4.667z"
          ></path>
          <path
            fill="none"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-miterlimit="4"
            stroke-width="1"
            stroke="#000"
            d="M16 17.333v10.667"
          ></path>
          <path
            fill="none"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-miterlimit="4"
            stroke-width="1"
            stroke="#000"
            d="M16 4v4"
          ></path>
        </svg>
      );
    case "pushpin":
      return (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>pushpin</title>
          <path d="M17 0l-3 3 3 3-7 8h-7l5.5 5.5-8.5 11.269v1.231h1.231l11.269-8.5 5.5 5.5v-7l8-7 3 3 3-3-15-15zM14 17l-2-2 7-7 2 2-7 7z"></path>
        </svg>
      );
    case "scan-face":
      return (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>scan-face</title>
          <path
            fill="none"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-miterlimit="4"
            stroke-width="1"
            stroke="#000"
            d="M4 9.333v-2.667c0-1.473 1.194-2.667 2.667-2.667v0h2.667"
          ></path>
          <path
            fill="none"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-miterlimit="4"
            stroke-width="1"
            stroke="#000"
            d="M22.667 4h2.667c1.473 0 2.667 1.194 2.667 2.667v0 2.667"
          ></path>
          <path
            fill="none"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-miterlimit="4"
            stroke-width="1"
            stroke="#000"
            d="M28 22.667v2.667c0 1.473-1.194 2.667-2.667 2.667v0h-2.667"
          ></path>
          <path
            fill="none"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-miterlimit="4"
            stroke-width="1"
            stroke="#000"
            d="M9.333 28h-2.667c-1.473 0-2.667-1.194-2.667-2.667v0-2.667"
          ></path>
          <path
            fill="none"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-miterlimit="4"
            stroke-width="1"
            stroke="#000"
            d="M10.667 18.667s2 2.667 5.333 2.667 5.333-2.667 5.333-2.667"
          ></path>
          <path
            fill="none"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-miterlimit="4"
            stroke-width="1"
            stroke="#000"
            d="M12 12h0.013"
          ></path>
          <path
            fill="none"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-miterlimit="4"
            stroke-width="1"
            stroke="#000"
            d="M20 12h0.013"
          ></path>
        </svg>
      );
    case "point-left":
      return (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>point-left</title>
          <path d="M19 30h-5c-1.654 0-3-1.346-3-3 0-0.535 0.14-1.037 0.386-1.472-0.833-0.534-1.386-1.467-1.386-2.528 0-0.768 0.29-1.469 0.766-2-0.476-0.531-0.766-1.232-0.766-2 0-0.35 0.060-0.687 0.171-1h-7.171c-1.654 0-3-1.346-3-3s1.346-3 3-3h12.334l-2.932-5.501c-0.262-0.454-0.401-0.973-0.401-1.499 0-1.654 1.346-3 3-3 0.824 0 1.592 0.327 2.163 0.921 0.007 0.008 0.015 0.015 0.022 0.023l6.815 7.474v-1.419c0-0.552 0.448-1 1-1h6c0.552 0 1 0.448 1 1v20c0 0.552-0.448 1-1 1h-6c-0.552 0-1-0.448-1-1v-1.382l-4.553 2.276c-0.139 0.069-0.292 0.106-0.447 0.106zM27 28c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM18.764 28l5.236-2.618v-11.995l-8.287-9.088c-0.19-0.193-0.443-0.299-0.713-0.299-0.551 0-1 0.449-1 1 0 0.171 0.041 0.332 0.122 0.479 0.010 0.017 0.020 0.033 0.029 0.051l3.732 7c0.165 0.31 0.156 0.684-0.025 0.985s-0.506 0.485-0.857 0.485h-14c-0.551 0-1 0.449-1 1s0.449 1 1 1h10c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.551 0-1 0.449-1 1s0.449 1 1 1c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.551 0-1 0.449-1 1s0.449 1 1 1h1c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.551 0-1 0.449-1 1s0.449 1 1 1h4.764z"></path>
        </svg>
      );
    case "point-right":
      return (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>point-right</title>
          <path d="M13 30h5c1.654 0 3-1.346 3-3 0-0.535-0.14-1.037-0.387-1.472 0.833-0.534 1.387-1.467 1.387-2.528 0-0.768-0.29-1.469-0.766-2 0.476-0.531 0.766-1.232 0.766-2 0-0.35-0.060-0.687-0.171-1h7.171c1.654 0 3-1.346 3-3s-1.346-3-3-3h-12.334l2.932-5.501c0.262-0.454 0.401-0.973 0.401-1.499 0-1.654-1.346-3-3-3-0.824 0-1.592 0.327-2.163 0.922-0.007 0.008-0.015 0.015-0.022 0.023l-6.815 7.474v-1.419c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v20c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-1.382l4.553 2.276c0.139 0.069 0.292 0.106 0.447 0.106zM5 28c-0.552 0-1-0.448-1-1s0.448-1 1-1 1 0.448 1 1-0.448 1-1 1zM13.236 28l-5.236-2.618v-11.995l8.287-9.088c0.19-0.193 0.443-0.299 0.713-0.299 0.551 0 1 0.449 1 1 0 0.171-0.041 0.332-0.122 0.479-0.010 0.017-0.020 0.033-0.029 0.051l-3.732 7c-0.165 0.31-0.156 0.684 0.025 0.985s0.506 0.485 0.857 0.485h14c0.551 0 1 0.449 1 1s-0.449 1-1 1h-10c-0.552 0-1 0.448-1 1s0.448 1 1 1c0.551 0 1 0.449 1 1s-0.449 1-1 1c-0.552 0-1 0.448-1 1s0.448 1 1 1c0.551 0 1 0.449 1 1s-0.449 1-1 1h-1c-0.552 0-1 0.448-1 1s0.448 1 1 1c0.551 0 1 0.449 1 1s-0.449 1-1 1h-4.764z"></path>
        </svg>
      );
    default:
      return <svg></svg>;
      break;
  }
};
