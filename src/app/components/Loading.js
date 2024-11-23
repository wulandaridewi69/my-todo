import Image from 'next/image';

import Loadings from '../assets/loading.gif';
import Header from '../components/Header';

const Loading = () => {
  return (
    <>
       <Header/>
       <Image src={Loadings} />
    </>
  );
};

export default Loading;
