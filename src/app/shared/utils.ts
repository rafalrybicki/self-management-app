export const showQuote = (): void => {
    const quote = document.querySelector('#quote')!;
    
    quote.classList.add('open');

    setTimeout(() => {
        quote.classList.remove('open');
    }, 5000);
}