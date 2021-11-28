import React, {useState, useEffect, useRef} from 'react';
import { useRouter } from "next/dist/client/router";

export interface ParamsPageProps {
}

export default function ParamsPage (props: ParamsPageProps) {
  const router = useRouter()
  return (
    <div>
      ParamsPage
    </div>
  );
}
