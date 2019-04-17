import React from 'react';
import { HistoryProps } from './Histroy.types';
import { RouteChildrenProps } from 'react-router';

export const History = (props:HistoryProps & RouteChildrenProps) => {

    return (
        <div className="history_container">
            History of songs played
        </div>
    );
};
