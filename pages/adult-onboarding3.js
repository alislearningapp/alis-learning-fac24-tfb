import Link from "next/link";
import styled from "styled-components";
import AdultsBack from "../components/AdultsBack";
import AdultsNext from "../components/AdultsNext";

export default function Adult() {
  return (
    <>
      <AdultsNext page={3} />
      <AdultsBack page={3} />
    </>
  );
}