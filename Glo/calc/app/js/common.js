// let total = 5000,
//     time = 1,
//     hourRate,
//     tabLeft = document.querySelector('.tab-left'),
//     tabRight = document.querySelector('.tab-right'),
//     blocksBlock = document.getElementById('blocks-block'),
//     pagesBlock = document.getElementById('pages-block'),
//     counterBlock = document.getElementById('counter-block'),
//     counterPages = document.getElementById('counter-pages'),
//     counterHours = document.getElementById('counter-hours'),
//     counterRate = document.getElementById('counter-rate'),
//     changesCheck = document.getElementById('changes-check'),
//     cmsCheck = document.getElementById('cms-check'),
//     totalValue = document.getElementsByClassName('total-count')[0],
//     input = document.getElementsByTagName('input');

// const land = 5000,
//     corp = 12000,
//     cms = 4000,
//     changes = 1000,
//     blocks = 500,
//     pages = 2500;

// window.addEventListener('DOMContentLoaded', function() {
//     tabLeft.addEventListener('click', () => {
//         if (tabLeft.classList.contains('active')) {
//             return
//         }
//         for (let i = 0; i < input.length; i++) {
//             input[i].value = '';
//         };
//         blocksBlock.style.display = 'flex';
//         pagesBlock.style.display = 'none';
//         tabLeft.classList.add('active');
//         tabRight.classList.remove('active');
//         if (changesCheck.checked) {
//             changesCheck.checked = false;
//         };
//         if (cmsCheck.checked) {
//             cmsCheck.checked = false;
//         };
//         total = land;
//         totalValue.value = total;
//     });

//     tabRight.addEventListener('click', () => {
//         if (tabRight.classList.contains('active')) {
//             return
//         }
//         for (let i = 0; i < input.length; i++) {
//             input[i].value = '';
//         };
//         blocksBlock.style.display = 'none';
//         pagesBlock.style.display = 'flex';
//         tabRight.classList.add('active');
//         tabLeft.classList.remove('active');
//         if (changesCheck.checked) {
//             changesCheck.checked = false;
//         };
//         if (cmsCheck.checked) {
//             cmsCheck.checked = false;
//         };
//         total = corp;
//         totalValue.value = total;
//     });

//     counterBlock.addEventListener('change', () => {
//         counterHours.value = '';
//         counterRate.value = '';
//         total = counterBlock.value * blocks;
//         totalValue.value = total;
//     });

//     counterPages.addEventListener('change', () => {
//         counterHours.value = '';
//         counterRate.value = '';
//         total = counterPages.value * pages;
//         totalValue.value = total;
//     });

//     counterHours.addEventListener('change', () => {
//         counterBlock.value = '';
//         counterPages.value = '';
//         total = 0;
//         time = counterHours.value;
//         hourRate = time * counterRate.value;
//         totalValue.value = hourRate;
//         total = hourRate;
//     });

//     counterRate.addEventListener('change', () => {
//         counterBlock.value = '';
//         counterPages.value = '';
//         total = 0;
//         hourRate = time * counterRate.value;
//         totalValue.value = hourRate;
//         total = hourRate;
//     });

//     changesCheck.addEventListener('change', () => {
//         if (changesCheck.checked) {
//             total += changes;
//             totalValue.value = total;
//         } else {
//             total -= changes;
//             totalValue.value = total;
//         };
//     });

//     cmsCheck.addEventListener('change', () => {
//         if (cmsCheck.checked) {
//             total += cms;
//             totalValue.value = total;
//         } else {
//             total -= cms;
//             totalValue.value = total;
//         };
//     });

//     for (var i = 0; i < input.length; i++) {
//         input[i].addEventListener('keydown', (event) => {
//             event.target.classList.toggle('blink');
//         });
//     };
//       for (var i = 0; i < input.length; i++) {
//         input[i].addEventListener('keyup', (event) => {
//             event.target.classList.add('blink');
//         });
//     };

// });


$(function() {
    var total = 5000,
        time = 1,
        hourRate,
        tabLeft = $('.tab-left'),
        tabRight = $('.tab-right'),
        blocksBlock = $('#blocks-block'),
        pagesBlock = $('#pages-block'),
        counterBlock = $('#counter-block'),
        counterPages = $('#counter-pages'),
        counterHours = $('#counter-hours'),
        counterRate = $('#counter-rate'),
        changesCheck = $('#changes-check'),
        cmsCheck = $('#cms-check'),
        totalValue = $('.total-count')[0],
        input = $('input');

    const land = 5000,
        corp = 12000,
        cms = 4000,
        changes = 1000,
        blocks = 500,
        pages = 2500;

    $('.tab').on('click', function() {
        // if ($(this).hasClass('active')) {
        //     return
        // }
        for (var i = 0; i < input.length; i++) {
            input[i].value = '';
        };
        $(this).addClass('active').siblings($(this)).removeClass('active');
        $('.checkbox').each(function() {
            this.checked = false;
        });
    });

    tabLeft.on('click', function() {
        blocksBlock.css('display', 'flex');
        pagesBlock.css('display', 'none');
        total = land;
        totalValue.value = total;
    });

    tabRight.on('click', function() {
        blocksBlock.css('display', 'none');
        pagesBlock.css('display', 'flex');
        total = corp;
        totalValue.value = total;
    });


    counterBlock.change(function() {
        counterHours.val('');
        counterRate.val('');
        total = counterBlock.val() * blocks;
        totalValue.value = total;
        if (changesCheck.prop('checked')) {
            total += changes;
            totalValue.value = total;
        };
        if (cmsCheck.prop('checked')) {
            total += cms;
            totalValue.value = total;
        };
    });

    counterPages.change(function() {
        counterHours.val('');
        counterRate.val('');
        total = counterPages.val() * pages;
        totalValue.value = total;
        if (changesCheck.prop('checked')) {
            total += changes;
            totalValue.value = total;
        };
        if (cmsCheck.prop('checked')) {
            total += cms;
            totalValue.value = total;
        };
    });

    counterHours.change(function() {
        counterBlock.val('');
        counterPages.val('');
        total = 0;
        time = counterHours.val();
        hourRate = time * counterRate.val();
        totalValue.value = hourRate;
        total = hourRate;
        if (changesCheck.prop('checked')) {
            total += changes;
            totalValue.value = total;
        };
        if (cmsCheck.prop('checked')) {
            total += cms;
            totalValue.value = total;
        };
    });

    counterRate.change(function() {
        counterBlock.val('');
        counterPages.val('');
        total = 0;
        hourRate = time * counterRate.val();
        totalValue.value = hourRate;
        total = hourRate;
        if (changesCheck.prop('checked')) {
            total += changes;
            totalValue.value = total;
        };
        if (cmsCheck.prop('checked')) {
            total += cms;
            totalValue.value = total;
        };
    });

    changesCheck.change(function() {
        if (changesCheck.prop('checked')) {
            total += changes;
            totalValue.value = total;
        } else {
            total -= changes;
            totalValue.value = total;
        };
    });

    cmsCheck.change(function() {
        if (cmsCheck.prop('checked')) {
            total += cms;
            totalValue.value = total;
        } else {
            total -= cms;
            totalValue.value = total;
        };
    });

    $('.counter').keydown(function() {
        $(this).removeClass('blink');
    });
    $('.counter').keyup(function() {
        $(this).addClass('blink');
    });

});