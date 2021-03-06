'use strict';
//let viewBoxX = 0;
//let viewBoxY = 0;
//let viewBoxWidth = 1255;
//let viewBoxHeight = 595.3;

let app = (function () {

    let svg = document.getElementById('Layer_1');
    let svg$ = $('#Layer_1');
    let textElement = document.getElementsByTagName('text');
    let textLength = textElement.length;
    let rectElement = document.getElementsByTagName('rect');
    let searchInput = document.getElementById('searchInput');
    let listOfStends = document.getElementById('list-of-stands');

    function _setViewBox(viewBoxWidth, viewBoxHeight) {
        //svg.setAttribute("viewBox", viewBoxX + ' ' + viewBoxY + ' ' + viewBoxWidth + ' ' + viewBoxHeight);
        svg.style.width = "100%";
    }

    function _addIDsForAllTextElements() {

        for (let i = 0; i < textLength; i++) {
            let id = textElement[i].textContent;
            textElement[i].id = id;

            //add 'click' event listeners to text elements
            textElement[i].addEventListener('click', (e) => {

                let target = svg.getElementById('rect-' + id);

                _selectStand(target);
            });

            //add 'click' event listeners to rect elements
            if (rectElement['rect-' + i]) {
                rectElement['rect-' + i].addEventListener('click', (e) => {

                    let target = e.target;

                    _selectStand(target);
                });
            }
        }
    }

    function _addEventListeners() {

        let zoominBtn = document.getElementById('zoomin');
        let zoomoutBtn = document.getElementById('zoomout');
        let zoomclearBtn = document.getElementById('zoomclear');
        let clearSearchBtn = document.getElementById('clear-search-btn');

        zoominBtn.addEventListener('click', () => {
            //let currentWidth = svg.getAttribute('viewBox').split(" ")[2];
            //let currentHight = svg.getAttribute('viewBox').split(" ")[3];
            //_setViewBox(+currentWidth + 100, +currentHight + 50);
            _zoomIn();
        });

        zoomoutBtn.addEventListener('click', () => {
            //let currentWidth = svg.getAttribute('viewBox').split(" ")[2];
            //let currentHight = svg.getAttribute('viewBox').split(" ")[3];
            //_setViewBox(+currentWidth - 100, +currentHight - 50);
            _zoomOut();
        });

        zoomclearBtn.addEventListener('click', () => {
            let currentWidth = svg.style.width;
            svg.style.width = '100%';
            svg.style.left = '0px';
            svg.style.top = '0px';
        });

        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            _filterListOfStands();
        });

        searchInput.addEventListener('keyup', (e) => _filterListOfStands(e.target.value));

        svg$.bind('mousewheel', function (e) {

            if (e.originalEvent.wheelDelta / 120 > 0) {
                _zoomOut();
            } else {
                _zoomIn();
            }
        });

    }

    function _makeDraggable() {
        $("#Layer_1").draggable();
    }

    function _populateListOfStands() {
        let stands = document.getElementById('list-of-stands');
        let lines = '';

        for (let i = 0; i < textLength; i++) {
            let id = textElement[i].textContent;
            lines += '<li class="list-group-item" name="list-options" id="' + id + '">' + id + '</li>';
        }

        stands.innerHTML = lines;

        let listOptions = document.getElementsByName('list-options');
        listOptions.forEach(e => {
            e.addEventListener('click', () => {
                _selectStand(document.getElementById('rect-' + e.id))
            })
        });
    }

    function _zoomIn() {
        let currentWidth = svg.style.width;
        svg.style.width = +currentWidth.slice(0, -1) - 20 + '%';
    }

    function _zoomOut() {
        let currentWidth = svg.style.width;
        svg.style.width = +currentWidth.slice(0, -1) + 20 + '%';
    }

    function _selectStand(target) {

        if (!target) return;

        let activeElements = svg.getElementsByClassName('stand-active');
        if (activeElements.length > 0) {
            activeElements[0].classList.remove("stand-active");
        }

        target.classList.add('stand-active');

        target.scrollIntoView({
            block: 'end',
            behavior: 'smooth'
        });

        //console.log(target.getBBox());
        //console.log(target.getScreenCTM());
        //console.log(target.getBoundingClientRect());

        //let bbox = target.getBBox();
//
        //svg.style.left = '-' + (bbox.x) + 'px';
        //svg.style.top = '-' + (bbox.y) + 'px';

        //focus on selected element
        //svg$.animate({
        //    width: '500%'
        //}, 'slow');

    }

    function _filterListOfStands(value) {
        if (!value) {
            listOfStends.childNodes.forEach(e => e.style.display = 'block');
        } else {
            listOfStends.childNodes.forEach(e => {
                if (e.innerHTML.indexOf(value) != -1) {
                    e.style.display = 'block';

                } else {
                    e.style.display = 'none';
                }
            });
        }
    }

    return {
        makeDraggable: _makeDraggable,
        setViewBox: _setViewBox,
        addIDsForAllTextElements: _addIDsForAllTextElements,
        addEventListeners: _addEventListeners,
        populateListOfStands: _populateListOfStands,
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    // document.getElementsByClassName('sidebar')[0].style.display = 'none';
    // document.getElementsByClassName('content-section')[0].style.display = 'none';   
    //document.getElementsByClassName('zoom-btn-container')[0].style.display = 'none';

    app.setViewBox(1255, 595.3);
    app.addIDsForAllTextElements();
    app.addEventListeners();
    app.makeDraggable();
    app.populateListOfStands();

    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        alert('Aha! your using mobile');
    } else {
        //alert('This is not mobile');
        //if mouse over SVG container disable page scrolling
        $('#container').on('scroll touchmove mousewheel', function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    }
});

//to be used http://interactjs.io/ ...tomorrow

// Toggle sidebar hamburger
$(function () {
    $('#sidebar-btn').click(function () {
        $('#sidebar').toggleClass('visible');
        //   $('#sidebar-btn').toggleClass('invisibile');

    });
});
