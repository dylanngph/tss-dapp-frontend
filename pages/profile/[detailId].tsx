import React, {useState, useEffect, useRef} from 'react';
import { useRouter } from "next/dist/client/router";
import Link from 'next/link';

export interface DetailPageProps {
}

export default function DetailPage (props: DetailPageProps) {
  const router = useRouter()
  return (
    <div>
      DetailPage
    </div>
  );
}
