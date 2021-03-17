export const changeCard = e => {
    const target = e.target;

    if (!target.closest('a')) {
        const card = target.closest('.card');

        if (card.classList.contains('active')) {
            card.classList.remove('active');
        } else {
            document.querySelectorAll('.card').forEach(item => {
                if (item === card) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    }
};