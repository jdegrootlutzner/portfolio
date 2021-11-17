import FlexMasonry from './assets/home/flexmasonry';
FlexMasonry.init('.masonry-grid',
    { responsive: true,
        /*
        * A list of how many columns should be shown at different responsive
        * breakpoints, defined by media queries.
        */
        breakpointCols: {

            'min-width: 992px': 3,
            'min-width: 768px': 2,
            'min-width: 576px': 1,
        },
    });


