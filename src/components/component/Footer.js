import { Button,Row,Col } from 'antd';
import LangSelect from './LangSelect';
function Footer() {
  return (
      <div className="flex justify-between mt-32 items-center pb-4">
          <div className="w-full flex flex-col md:block items-center ">
             <img src="/assets/img/mark2.png"className="w-8 inline mx-4" />
             <a className="mt-2">Copyright © 2021 All rights reserved.</a>
          </div>
      </div>
  );
}
export default Footer;
        

