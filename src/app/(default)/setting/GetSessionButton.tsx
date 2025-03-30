'use client';

import { Button } from '@/components/ui/button';
import { wanrunUrl } from '@/constants';

const targetUrl = `${wanrunUrl}/api/token`;

const GetSessionButton = () => {
  const getSession = async () => {
    const res = await fetch(targetUrl);
    console.log(res.status);
  };

  return (
    <Button onClick={getSession} variant="outline">
      Session
    </Button>
  );
};

export default GetSessionButton;
