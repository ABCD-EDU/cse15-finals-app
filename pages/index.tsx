import Head from 'next/head';
import Image from 'next/image';
import InputSection from '../components/InputSection';
import Navbar from '../components/Navbar';
import OutputSection from '../components/OutputSection';

export default function Home() {
  return (
    <>
      <div className="flex mx-auto flex flex-row justify-center">
        <div className="flex flex-row border-[1px]">
          <InputSection />
          <OutputSection />
        </div>
      </div>
    </>
  );
}
