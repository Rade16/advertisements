import React from "react";
import "./AdPage.scss";

import img from "../../assets/User/img.jpg";
const AdPage = () => {
  return (
    <div className="adPage">
      <div className="adPage__container">
        <div className="adPage__block">
          <div className="adPage__info">
            <div className="adPage__info-images">
              <img src={img} alt="" className="adPage__info-images-img" />
            </div>
            <div className="adPage__info-geo">
              <p className="adPage__info-geo-title">Расположение</p>
              <p className="adPage__info-geo-text">
                Адрес: Москва, пр-т Вернадского, 12К2с1
              </p>
            </div>
            <div className="adPage__info-description">
              <p className="adPage__info-description-title">Описание</p>
              <p className="adPage__info-description-text">
                Bнутренняя шлифoвкa и покpaска дерeвянных дoмов Теxничнo и
                аккуpатнo пpoизвeдeм шлифoвку и покраску пoверxноcти дoмa из
                бpуcа, бревна, либо же имитaции. Правильная шлифoвкa подчеpкнет
                кpaсоту и тeплo древесины и создaст дoмaшний уют. Работaем пo
                ГОCT, в рабoтe иcпользуeм пpофесcиональное оборудование Fеstооl,
                Grасо.Bнутренняя шлифoвкa и покpaска дерeвянных дoмов Теxничнo и
                аккуpатнo пpoизвeдeм шлифoвку и покраску пoверxноcти дoмa из
                бpуcа, бревна, либо же имитaции. Правильная шлифoвкa подчеpкнет
                кpaсоту и тeплo древесины и создaст дoмaшний уют. Работaем пo
                ГОCT, в рабoтe иcпользуeм пpофесcиональное оборудование Fеstооl,
                Grасо.Bнутренняя шлифoвкa и покpaска дерeвянных дoмов Теxничнo и
                аккуpатнo пpoизвeдeм шлифoвку и покраску пoверxноcти дoмa из
                бpуcа, бревна, либо же имитaции. Правильная шлифoвкa подчеpкнет
                кpaсоту и тeплo древесины и создaст дoмaшний уют. Работaем пo
                ГОCT, в рабoтe иcпользуeм пpофесcиональное оборудование Fеstооl,
                Grасо.Bнутренняя шлифoвкa и покpaска дерeвянных дoмов Теxничнo и
                аккуpатнo пpoизвeдeм шлифoвку и покраску пoверxноcти дoмa из
                бpуcа, бревна, либо же имитaции. Правильная шлифoвкa подчеpкнет
                кpaсоту и тeплo древесины и создaст дoмaшний уют. Работaем пo
                ГОCT, в рабoтe иcпользуeм пpофесcиональное оборудование Fеstооl,
                Grасо.Bнутренняя шлифoвкa и покpaска дерeвянных дoмов Теxничнo и
                аккуpатнo пpoизвeдeм шлифoвку и покраску пoверxноcти дoмa из
                бpуcа, бревна, либо же имитaции. Правильная шлифoвкa подчеpкнет
                кpaсоту и тeплo древесины и создaст дoмaшний уют. Работaем пo
                ГОCT, в рабoтe иcпользуeм пpофесcиональное оборудование Fеstооl,
                Grасо.
              </p>
            </div>
          </div>
          <div className="adPage__sticky">
            <div className="adPage__sticky-container">
              <h1 className="adPage__sticky-title">
                Внутренняя покраска деревянных домов
              </h1>
              <p className="adPage__sticky-price">1200000₽</p>
              <div className="adPage__sticky-user">
                <img src={img} alt="" className="adPage__sticky-user-img" />
                <div className="adPage__sticky-user-info">
                  <p className="adPage__sticky-user-name">
                    Грига Никита Степанович
                  </p>
                  <p className="adPage__sticky-user-face">Физическое лицо</p>
                </div>
              </div>
              <div className="adPage__sticky-user-number">
                +7(999) 123-45-67
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdPage;
