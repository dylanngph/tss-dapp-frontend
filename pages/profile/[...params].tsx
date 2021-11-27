import React, {useState, useEffect, useRef} from 'react';
import { useRouter } from "next/dist/client/router";
import Link from 'next/link';

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
