import React from 'react';

const FaqItem = ({number, question, answer}) => {
    return (
        <div className="faq__item">
            <div className="faq__item--wrapper">
                <div className="faq__item--title--inner">
                    <p className="faq__item--num">{number}</p>

                    <p className="faq__item--question">
                        {question}
                    </p>
                </div>

                <div className="faq__item--open">
                    <p>+</p>
                </div>
            </div>

            <div className="faq__item--answer">
                {answer}
            </div>
        </div>
    )
}

export default FaqItem;