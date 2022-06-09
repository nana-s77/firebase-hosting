import React from 'react';
import { Helmet } from 'react-helmet';

type HeadProps = {
    title?: string;
    description: string;
}

export const Head = (props: HeadProps) => (
    <Helmet>
        <title>{props.title ? props.title : 'React GA'}</title>
        <meta name='description' content={props.description} />
    </Helmet>
)


    
