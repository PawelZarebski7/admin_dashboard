import React from "react";
import noResult from "../../assets/img/no-result.svg";
import { useTranslation } from "react-i18next";

const NotFound = () => {

  const { t } = useTranslation();

  return (
    <div className="text-center align-middle mx-auto p-5 my-5">
      <img className="my-4" style={{textAlign: 'center', margin: '0 auto', marginBottom: '40px'}} src={noResult} alt="no-result" width="400" />
      <h2 className="text-lg md:text-xl lg:text-2xl xl:text-2xl text-center mt-2 font-medium font-serif text-gray-600">
        {t('sorry_we_can_not_find_this_employee')}
        <span role="img" aria-labelledby="img">
          😞
        </span>
      </h2>
    </div>
  );
};

export default NotFound;
