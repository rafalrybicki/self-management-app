import { formatDate } from "@angular/common";

export const showQuote = (): void => {
    const quote = document.querySelector('#quote')!;
    
    quote.classList.add('open');

    setTimeout(() => {
        quote.classList.remove('open');
    }, 5000);
}

export const getFormattedDate = (date: Date = new Date()): string => {
    return formatDate(date, 'd-M-yyyy', 'en');
}

export const getWeek = (currentDate = new Date()): string => {
    const firstJanuary = new Date(currentDate.getFullYear(), 0, 1);
    const today = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const dayOfYear = ((today.valueOf() - firstJanuary.valueOf() + 86400000) / 86400000);
    
    return `${Math.ceil(dayOfYear / 7)}-${currentDate.getFullYear()}`;
}

export const getPrevWeek = (week: number, year: number): string => {
    if (week === 1) {
        return `${52}-${year - 1}`;
    } else {
        return `${week - 1}-${year}`;
    }
}

export const getNextWeek = (week: number, year: number): string => {
    if (week === 52) {
        return `${1}-${year + 1}`;
    } else {
        return `${week + 1}-${year}`;
    }
}