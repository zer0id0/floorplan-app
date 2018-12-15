'use strict';

let app = (function () {
    let pdfFileName = 'https://zer0id0.github.io/floorplan-app/SIGMA%202018%20-%20Sales%20Plan.pdf';
    let sidebar = document.getElementById('sidebar');
    let searchInput = document.getElementById('searchInput');
    let inactiveText = [
        'WORKSHOP',
        'ROOM',
        'FOOD',
        'COURT',
        'SMOKING',
        'LOUNGE AREA',
        'CONFERENCE'
    ];

    let sideNav = document.getElementById("side-nav");

    let svg = document.getElementById('Layer_1');
    let svg$ = $('#Layer_1');
    
    function _openNav() {
        sideNav.style.width = "250px";
    }

    function _closeNav() {
        sideNav.style.width = "0";
    }

    /*
     * Add ids and click event listners to all <rect> and <text> elements of SVG
     **/
    function _addIDsAndClickEventListners() {

        let textElements = document.getElementsByTagName('text');
        let rectElements = document.getElementsByTagName('rect');
        /* this is required duy to error in borders of <text> and <rect> elements
            some times text outside rect, sometimes inside */
        let dispersion = 2;

        let count = 0;

        let lines = '';
        //let liRectMapping = [];
        //loop throught all rect elements in svg
        for (let re of rectElements) {

            let rectBCR = re.getBoundingClientRect();

            //find text element placed inside rect   
            for (let te of textElements) {

                let textBCR = te.getBoundingClientRect();

                if ((textBCR.x + dispersion > rectBCR.x && textBCR.y + dispersion > rectBCR.y) &&
                    (textBCR.x + textBCR.width < rectBCR.x + dispersion + rectBCR.width && textBCR.y + textBCR.height < rectBCR.y + dispersion + rectBCR.height)) {
                    if (!inactiveText.some(substr => te.innerHTML.includes(substr))) {

                        if (re.id) {

                            te.id = 'text2-' + re.id.slice(5);
                            te.addEventListener('click', (e) => _onRectOrTextClicked(re.id));
                            
                        } else {

                            re.id = 'rect-' + count;
                            te.id = 'text-' + count;
                            re.addEventListener('click', (e) => _onRectOrTextClicked(re.id));
                            te.addEventListener('click', (e) => _onRectOrTextClicked(re.id));

                            lines += '<li class="list-group-item" id="list-' + count + '">' + te.innerHTML + ' | </li>';
                        }

                        count++;
                    }
                }
            }
        }

        //populate sidebar list
        let listOfStends = document.getElementById('list-of-stands');
        let listOptions = listOfStends.childNodes;
        listOfStends.innerHTML = lines;

        listOptions.forEach(e => {

            let text2 = svg.getElementById('text2-' + e.id.slice(5));
            if(text2){
                e.innerHTML += text2.innerHTML;
            }
            
            e.addEventListener('click', () => {
                _unselectAllInSidebar();
                e.classList.add('list-of-stands-active');
                _selectStand(document.getElementById('rect-' + e.id.slice(5)), false);
            })
        });
    }

    function _addEventListeners() {

        //add event listeners for buttons, input and mousewheel
        let zoominBtn = document.getElementById('zoomin');
        let zoomoutBtn = document.getElementById('zoomout');
        let zoomclearBtn = document.getElementById('zoomclear');
        let clearSearchBtn = document.getElementById('clear-search-btn');
        let downloadAsPDF = document.getElementById('download-as-pdf-btn');

        zoominBtn.addEventListener('click', () => _zoomIn());

        zoomoutBtn.addEventListener('click', () => _zoomOut());

        zoomclearBtn.addEventListener('click', () => {

            svg.style.width = '100%';
            svg.style.left = '0px';
            svg.style.top = '0px';
            //svg.style.transform = 'scale(1)';
        });

        document.getElementById('clear-search-btn').addEventListener('click', () => {
            searchInput.value = '';
            _filterListOfStands();
        });

        searchInput.addEventListener('keyup', (e) => _filterListOfStands(e.target.value));

        $('#Layer_1').bind('mousewheel', function (e) {

            if (e.originalEvent.wheelDelta / 120 > 0) {
                _zoomOut();
            } else {
                _zoomIn();
            }
        });

        downloadAsPDF.addEventListener('click', (e) => {
            window.open(pdfFileName, '_blank')
        });
    }

    function _makeDraggable() {
        $("#Layer_1").draggable();
    }

    function _populateListOfStands() {

        let textElement = document.getElementsByTagName('text');
        let textLength = textElement.length;
        let rectElement = document.getElementsByTagName('rect');

        let lines = '';

        for (let i = 0; i < textLength; i++) {
            let id = textElement[i].textContent;
            lines += '<li class="list-group-item" id="list-' + id + '"> ID' + id + ' | ' + id + '</li>';
        }

        let listOfStends = document.getElementById('list-of-stands');
        let listOptions = listOfStends.childNodes;
        listOfStends.innerHTML = lines;

        listOptions.forEach(e => {
            e.addEventListener('click', () => {

                _unselectAllInSidebar();

                e.classList.add('list-of-stands-active');

                _selectStand(document.getElementById('rect-' + e.id.slice(5)), false);
            })
        });
    }

    function _zoomIn() {
        let currentWidth = svg.style.width || '100%';
        if (currentWidth.slice(0, -1) > 40) {
            svg.style.width = currentWidth.slice(0, -1) - 40 + '%';
        }

    }

    function _zoomOut() {
        let currentWidth = svg.style.width || '100%';
        svg.style.width = +currentWidth.slice(0, -1) + 40 + '%';
    }

    function _selectStand(target, scroll) {

        if (!target) return;

        //unselect all rect
        let activeElements = svg.getElementsByClassName('stand-active');
        if (activeElements.length > 0) {
            activeElements[0].classList.remove("stand-active");
        }

        target.classList.add('stand-active');

        if (scroll) {
            let option = document.getElementById('list-' + target.id.slice(5));
            if (option) {
                option.classList.add('list-of-stands-active');
                let listOfStends = document.getElementById('list-of-stands');
                listOfStends.scrollTo(0, option.offsetTop - listOfStends.offsetTop);
            }
        }

        //svg$.animate({ width: '300%'}, 'fast'); //, 'slow'
        let currentWidth = svg.style.width || '100%';
        if (+currentWidth.slice(0, -1) < 500) {
            svg.style.width = '500%';
        }

        target.scrollIntoView({
            block: 'center',
            behavior: 'smooth' //behavior: "auto"  | "instant" | "smooth"
        });

    }

    function _filterListOfStands(value) {

        let listOfStends = document.getElementById('list-of-stands');
        if (!value) {
            listOfStends.childNodes.forEach(e => e.style.display = 'block');
        } else {
            listOfStends.childNodes.forEach(e => {
                if (e.innerHTML.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) != -1) {
                    e.style.display = 'block';

                } else {
                    e.style.display = 'none';
                }
            });
        }
    }

    function _unselectAllInSidebar() {
        let activeElements = sidebar.getElementsByClassName('list-of-stands-active');
        if (activeElements.length > 0) {
            activeElements[0].classList.remove("list-of-stands-active");
        }
    }

    function _onRectOrTextClicked(id) {

        _unselectAllInSidebar();

        searchInput.value = '';

        let option = document.getElementById('list-' + id.slice(5));
        if (option) {
            option.classList.add('list-of-stands-active');
        }

        _selectStand(svg.getElementById('rect-' + id.slice(5)), true);
    }

    return {

        openNav: _openNav,
        closeNav: _closeNav,
        addIDsAndClickEventListners: _addIDsAndClickEventListners,
        makeDraggable: _makeDraggable,
        addEventListeners: _addEventListeners,
        populateListOfStands: _populateListOfStands,
    }
})();

document.addEventListener('DOMContentLoaded', () => {

    app.addIDsAndClickEventListners();
    app.addEventListeners();
    app.makeDraggable();
    //app.populateListOfStands();

    //$('#container').on('scroll touchmove mousewheel', function (e) {
    //    e.preventDefault();
    //    e.stopPropagation();
    //    return false;
    //});

    if (typeof window.orientation !== "undefined" || navigator.userAgent.indexOf('IEMobile') !== -1) {} else {
        app.openNav();
    }
});
