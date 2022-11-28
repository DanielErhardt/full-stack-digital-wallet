import moment from 'moment';

export const formatDate = (date:string): string => moment(date).locale('pt-br').format('DD/MM/YYYY');
