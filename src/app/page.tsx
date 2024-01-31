import Link from 'next/link';
import React from 'react';

export default function HomeMoshal() {
  return (<>
  <small>Front End Development Mode</small>
  <Link href="/main/jobs">
    Move To First Page (Jobs)
    </Link>
  </>  );
}
