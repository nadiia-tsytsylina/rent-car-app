import { Rings } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";

export default function Loader() {
  return (
    <LoaderContainer>
      <Rings
        height="120"
        width="120"
        color="var(--accent-color)"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </LoaderContainer>
  );
}
