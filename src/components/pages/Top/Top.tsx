import React from 'react';
import styles from './css/style.module.scss';
import { Head } from '../Head/head';
import { Button } from '../../common/Button/Button';


export const Top = () => {
    return (
        <>
            <Head title='topページ' description='topページです' />
            <h1>TOPページ</h1>
            <Button type='button' onClickFunc={() => false}>ボタン</Button>
            
        </>
    )
}