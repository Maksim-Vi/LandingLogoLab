import React from 'react'
import askedQuestions from '../../constants/askedQuestions'
import Divider from '../common/drawer/Divider'
import Acardion from './components/Acardion'
import './questions.scss'

const AskedQuestion = () => {
    return (
        <div id='faq' className='asked_question_container'>
            <h2 className='title'>Frequently asked questions</h2>
            <p className='sub_title'>The rise of mobile devices transforms the way we consume information entirely
                and the world's most elevant channels such as Facebook.
            </p>
            {askedQuestions.length > 0 &&
                askedQuestions.map((question,index)=>{
                    return   <Acardion key={index} title={question.title} index={index}>
                        {question.content}
                    </Acardion>
                })
            }
            <Divider />
        </div>
    )
}

export default AskedQuestion
