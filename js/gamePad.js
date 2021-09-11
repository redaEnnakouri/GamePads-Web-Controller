const tabs = []
const game = []
var duration = 1
window.id_btn_0 = Math.random()
window.id_btn_1 = Math.random()
window.id_btn_2 = Math.random()
window.id_btn_3 = Math.random()
window.id_btn_4 = Math.random()
window.id_btn_5 = Math.random()
window.id_btn_8 = Math.random()
window.id_btn_9 = Math.random()
window.id_btn_10 = Math.random()
window.id_btn_11 = Math.random()
window.id_btn_12 = Math.random()
window.id_btn_13 = Math.random()
window.id_btn_14 = Math.random()
window.id_btn_15 = Math.random()

window.id_ANG_1 = Math.random()
window.id_ANG_2 = Math.random()



const table = document.querySelector( "#myTable" );
const gamepadStatus = document.querySelector( "#gamepadStatus" );


function start() {
    window.addEventListener( "gamepadconnected", ( event ) => {
        console.log( "A gamepad connected:" );
        gamepadStatus.innerHTML = "A gamepad connected!"
        gamepadStatus.style.background = "#009688"
        gamepadStatus.style.opacity = "1"
        console.log( event.gamepad );
        window.gamedisplay = false
        setTime( 3000 )
    } );

    window.addEventListener( "gamepaddisconnected", ( event ) => {
        console.log( "A gamepad disconnected:" );
        gamepadStatus.innerHTML = "A gamepad disconnected!"
        gamepadStatus.style.background = "#bd2121"
        console.log( event.gamepad )
        window.gamedisplay = true
        setTime( 3000 )
    } );

    function setTime( $timeout ) {
        setTimeout( function () {
            if ( window.gamedisplay == true ) {
                gamepadStatus.innerHTML = "Connect a gamepad!"
                gamepadStatus.style.background = "#bd2121"
                gamepadStatus.style.transform = "translate(0px, 0px)"
            } else {
                gamepadStatus.style.transform = "translate(970px, 0px)"
            }
        }, $timeout );
    }

    setInterval( function () {



        var dt = new Date();
        //declaration GAmePAde
        const gpl = navigator.getGamepads();

        //button HTML
        const ellipse_1 = document.querySelector( '#Ellipse_1' )

        const ellipse_2 = document.querySelector( '#Ellipse_2' )
        const ellipse_3 = document.querySelector( '#Ellipse_3' )
        const ellipse_4 = document.querySelector( '#Ellipse_4' )
        const ellipse_6 = document.querySelector( '#Ellipse_6' )
        const ellipse_8 = document.querySelector( '#Ellipse_8' )

        const path_2 = document.querySelector( '#Path_2' )
        const path_3 = document.querySelector( '#Path_3' )
        const path_4 = document.querySelector( '#Path_4' )
        const path_5 = document.querySelector( '#Path_5' )
        const path_6 = document.querySelector( '#Path_6' )
        const path_7 = document.querySelector( '#Path_7' )

        const rectangle_12 = document.querySelector( '#Rectangle_12' )
        const rectangle_11 = document.querySelector( '#Rectangle_11' )


        const active = document.querySelector( '.cls-active' )




        if ( gpl[0] ) {
            //button
            const btn_0 = gpl[0].buttons[3].pressed
            const btn_1 = gpl[0].buttons[1].pressed
            const btn_2 = gpl[0].buttons[2].touched
            const btn_3 = gpl[0].buttons[0].touched
            const btn_4 = gpl[0].buttons[4].touched
            const btn_5 = gpl[0].buttons[5].touched
            const btn_9 = gpl[0].buttons[9].touched
            const btn_8 = gpl[0].buttons[8].touched

            //BTN ANALOG
            const btn_10 = gpl[0].buttons[10].touched
            const btn_11 = gpl[0].buttons[11].touched

            // AXES FLECH
            const btn_12 = gpl[0].buttons[15].touched
            const btn_13 = gpl[0].buttons[14].touched
            const btn_14 = gpl[0].buttons[13].touched
            const btn_15 = gpl[0].buttons[12].touched

            // AXES ANLOG
            const ang_0 = gpl[0].axes[0]
            const ang_1 = gpl[0].axes[1]
            const ang_2 = gpl[0].axes[2]
            const ang_3 = gpl[0].axes[3]


            if ( btn_0 || btn_1 || btn_2 || btn_3 || btn_4 || btn_5 || btn_8 || btn_9 || btn_10 || btn_11 ||
                btn_12 || btn_13 || btn_14 || btn_15 ||
                ang_0 >= 0.00393 || ang_0 <= -0.00393 || ang_1 >= 0.00393 || ang_1 <= -0.00393 ||
                ang_2 >= 0.00393 || ang_2 <= -0.00393 || ang_3 >= 0.00393 || ang_3 <= -0.00393

            ) {

                if ( btn_0 ) {
                    ellipse_1.classList.add( "cls-active" );
                    tabs.push( ['button_0', duration, dt.toLocaleTimeString() + '.' + dt.getMilliseconds(), window.id_btn_0] )
                } else {
                    ellipse_1.classList.remove( "cls-active" );
                    window.id_btn_0 = Math.random()

                }


                if ( btn_1 ) {
                    ellipse_2.classList.add( "cls-active" );
                    tabs.push( ['button_1', duration, dt.toLocaleTimeString() + '.' + dt.getMilliseconds(), window.id_btn_1] )
                } else {
                    ellipse_2.classList.remove( "cls-active" );
                    window.id_btn_1 = Math.random()
                }

                if ( btn_2 ) {
                    ellipse_3.classList.add( "cls-active" );
                    tabs.push( ['button_2', duration, dt.toLocaleTimeString() + '.' + dt.getMilliseconds(), window.id_btn_2] )
                } else {
                    ellipse_3.classList.remove( "cls-active" );
                    window.id_btn_2 = Math.random()
                }

                if ( btn_3 ) {
                    ellipse_4.classList.add( "cls-active" );
                    tabs.push( ['button_3', duration, dt.toLocaleTimeString() + '.' + dt.getMilliseconds(), window.id_btn_3] )

                } else {
                    ellipse_4.classList.remove( "cls-active" );
                    window.id_btn_3 = Math.random()
                }

                if ( btn_4 ) {
                    path_6.classList.add( "cls-active" );
                    tabs.push( ['button_4', duration, dt.toLocaleTimeString() + '.' + dt.getMilliseconds(), window.id_btn_4] )
                } else {
                    path_6.classList.remove( "cls-active" );
                    window.id_btn_4 = Math.random()
                }

                if ( btn_5 ) {
                    path_7.classList.add( "cls-active" );
                    tabs.push( ['button_5', duration, dt.toLocaleTimeString() + '.' + dt.getMilliseconds(), window.id_btn_5] )
                } else {
                    path_7.classList.remove( "cls-active" );
                    window.id_btn_5 = Math.random()
                }

                if ( btn_9 ) {
                    rectangle_12.classList.add( "cls-active" );
                    tabs.push( ['button_9', duration, dt.toLocaleTimeString() + '.' + dt.getMilliseconds(), window.id_btn_9] )
                } else {
                    rectangle_12.classList.remove( "cls-active" );
                    window.id_btn_9 = Math.random()
                }

                if ( btn_8 ) {
                    rectangle_11.classList.add( "cls-active" );
                    tabs.push( ['button_8', duration, dt.toLocaleTimeString() + '.' + dt.getMilliseconds(), window.id_btn_8] )
                } else {
                    rectangle_11.classList.remove( "cls-active" );
                    window.id_btn_8 = Math.random()
                }



                //analog
                if ( btn_10 ) {
                    ellipse_6.classList.add( "cls-active" );
                    tabs.push( ['button_10', duration, dt.toLocaleTimeString() + '.' + dt.getMilliseconds(), window.id_btn_10] )

                } else {
                    ellipse_6.classList.remove( "cls-active" );
                    window.id_btn_10 = Math.random()
                }
                if ( btn_11 ) {
                    ellipse_8.classList.add( "cls-active" );
                    tabs.push( ['button_11', duration, dt.toLocaleTimeString() + '.' + dt.getMilliseconds(), window.id_btn_11] )
                } else {
                    ellipse_8.classList.remove( "cls-active" );
                    window.id_btn_11 = Math.random()
                }

                if ( btn_12 ) {
                    path_2.classList.add( "cls-active" );
                    tabs.push( ['button_12', duration, dt.toLocaleTimeString() + '.' + dt.getMilliseconds(), window.id_btn_12] )
                } else {
                    path_2.classList.remove( "cls-active" );
                    window.id_btn_12 = Math.random()
                }
                if ( btn_13 ) {
                    path_5.classList.add( "cls-active" );
                    tabs.push( ['button_13', duration, dt.toLocaleTimeString() + '.' + dt.getMilliseconds(), window.id_btn_13] )
                } else {
                    path_5.classList.remove( "cls-active" );
                    window.id_btn_13 = Math.random()
                }
                if ( btn_14 ) {
                    path_3.classList.add( "cls-active" );
                    tabs.push( ['button_14', duration, dt.toLocaleTimeString() + '.' + dt.getMilliseconds(), window.id_btn_14] )
                } else {
                    path_3.classList.remove( "cls-active" );
                    window.id_btn_14 = Math.random()
                }
                if ( btn_15 ) {
                    path_4.classList.add( "cls-active" );
                    tabs.push( ['button_15', duration, dt.toLocaleTimeString() + '.' + dt.getMilliseconds(), window.id_btn_15] )
                } else {
                    path_4.classList.remove( "cls-active" );
                    window.id_btn_15 = Math.random()
                }


                //value  the annalog 1
                var axes = (gpl[0].axes[1] * 25) + 510
                var axes_0 = (gpl[0].axes[0] * 25) + 670
                if ( ang_0 >= 0.00393 || ang_0 <= -0.00393 || ang_1 >= 0.00393 || ang_1 <= -0.00393 ) {

                    ellipse_6.style.transform = "translate(" + axes_0 + "px," + axes + "px)";
                    tabs.push( ['axes_1', duration, dt.toLocaleTimeString() + '.' + dt.getMilliseconds(), window.id_ANG_1, gpl[0].axes[1], gpl[0].axes[0], 'axes'] )

                    //console.log( 'AxesX:' + gpl[0].axes[1], 'AxesY:' + gpl[0].axes[0] )

                } else {
                    ellipse_6.style.transform = "translate(670px,510px) ";
                    window.id_ANG_1 = Math.random()

                }

                //value  the annalog 2
                var axes_3 = (gpl[0].axes[3] * 25 )+ 510
                var axes_2 = (gpl[0].axes[2] * 25) + 1210
                if ( ang_2 >= 0.00393 || ang_2 <= -0.00393 || ang_3 >= 0.00393 || ang_3 <= -0.00393 ) {

                    ellipse_8.style.transform = "translate(" + axes_2 + "px," + axes_3 + "px)";
                    tabs.push( ['axes_2', duration, dt.toLocaleTimeString() + '.' + dt.getMilliseconds(), window.id_ANG_1, gpl[0].axes[3], gpl[0].axes[2], 'axes'] )
                    //console.log( 'AxesZ:' + gpl[0].axes[3], 'AxesB:' + gpl[0].axes[2] )

                } else {
                    ellipse_8.style.transform = "translate(1210px,510px) ";
                    window.id_ANG_2 = Math.random()
                }

            } else {
                tabs.push( ['pause', duration, dt.toLocaleTimeString() + '.' + dt.getMilliseconds()] )

                if ( active ) {
                    active.classList.remove( "cls-active" );
                    window.id_btn_0 = Math.random()
                    window.id_btn_1 = Math.random()
                    window.id_btn_2 = Math.random()
                    window.id_btn_3 = Math.random()
                    window.id_btn_4 = Math.random()
                    window.id_btn_5 = Math.random()
                    window.id_btn_8 = Math.random()
                    window.id_btn_9 = Math.random()
                    window.id_btn_10 = Math.random()
                    window.id_btn_11 = Math.random()
                    window.id_btn_12 = Math.random()
                    window.id_btn_13 = Math.random()
                    window.id_btn_14 = Math.random()
                    window.id_btn_15 = Math.random()

                    window.id_ANG_1 = Math.random()
                    window.id_ANG_2 = Math.random()

                    ellipse_6.style.transform = "translate(670px,510px) ";
                    ellipse_8.style.transform = "translate(1210px,510px) ";
                }

            }

        }

    }, duration )

}



window.onload = start


function generate() {
    // console.log( "//////////////// table 1//////////////", tabs )


    // 1 Buttons
    for ( var i = 1; i < tabs.length; i++ ) {

        // Button
        if ( tabs[i][0] == tabs[i - 1][0] && ( ( tabs[i][6] != 'axes' ) ) ) {
            //console.log( 'test-1 : ' + tabs[i][0] )
            var time = tabs[i - 1][1] + tabs[i][1]

            tabs[i][1] = time

            tabs[i - 1].splice( tabs[i] )

        }
        // Axes 
        if ( tabs[i][0] == tabs[i - 1][0] && ( ( tabs[i][6] == 'axes' ) )
            && tabs[i][5] == tabs[i - 1][5] && tabs[i][4] == tabs[i - 1][4]
        ) {

            //console.log( 'test-2 : ' + tabs[i][0] )
            var time = tabs[i - 1][1] + tabs[i][1]

            tabs[i][1] = time

            tabs[i - 1].splice( tabs[i] )
        }

    }

    // 2 Buttons
    for ( var i = 2; i < tabs.length; ++i ) {
        // Button
        if ( ( tabs[i - 1][1] == tabs[i - 2][1] ) && ( tabs[i][1] == "1" ) && ( tabs[i][0] == tabs[i - 2][0] ) && ( ( tabs[i][6] != 'axes' ) ) ) {
            // console.log( tabs[i][0] + "---2--" + tabs[i - 2][0] )

            var time = tabs[i - 2][1] + tabs[i][1]
            tabs[i][1] = time
            tabs[i + 1][1] = time



            tabs[i - 1].splice( tabs[i] )
            tabs[i - 2].splice( tabs[i] )
        }
        // Axes 
        if ( ( tabs[i - 1][1] == tabs[i - 2][1] ) && ( tabs[i][1] == "1" ) && ( tabs[i][0] == tabs[i - 2][0] )
            && ( ( tabs[i][6] == 'axes' ) ) && ( tabs[i][5] == tabs[i - 2][5] && tabs[i][4] == tabs[i - 2][4] ) ) {
            // console.log( tabs[i][0] + "---2--" + tabs[i - 2][0] )

            var time = tabs[i - 2][1] + tabs[i][1]
            tabs[i][1] = time
            tabs[i + 1][1] = time



            tabs[i - 1].splice( tabs[i] )
            tabs[i - 2].splice( tabs[i] )
        }

    }
    // 3 Buttons
    for ( var i = 3; i < tabs.length; ++i ) {

        // Button
        if ( ( tabs[i - 1][1] == tabs[i - 2][1] ) && ( tabs[i - 3][1] == tabs[i - 2][1] ) && ( tabs[i][1] == "1" )
            && ( tabs[i][0] == tabs[i - 3][0] ) && ( ( tabs[i][6] != 'axes' ) ) ) {

            // console.log( tabs[i][0] + "--3---" + tabs[i - 3][0] )

            var time = tabs[i - 3][1] + tabs[i][1]
            tabs[i][1] = time
            tabs[i + 1][1] = time
            tabs[i + 2][1] = time

            tabs[i - 1].splice( tabs[i] )
            tabs[i - 2].splice( tabs[i] )
            tabs[i - 3].splice( tabs[i] )


        }
        // Axes 
        if ( ( tabs[i - 1][1] == tabs[i - 2][1] ) && ( tabs[i - 3][1] == tabs[i - 2][1] ) && ( tabs[i][1] == "1" )
            && ( tabs[i][0] == tabs[i - 3][0] )
            && ( ( tabs[i][6] == 'axes' ) ) && ( tabs[i][5] == tabs[i - 3][5] && tabs[i][4] == tabs[i - 3][4] ) ) {

            // console.log( tabs[i][0] + "--3---" + tabs[i - 3][0] )

            var time = tabs[i - 3][1] + tabs[i][1]
            tabs[i][1] = time
            tabs[i + 1][1] = time
            tabs[i + 2][1] = time

            tabs[i - 1].splice( tabs[i] )
            tabs[i - 2].splice( tabs[i] )
            tabs[i - 3].splice( tabs[i] )
        }
    }
    // 4 Buttons
    for ( var i = 4; i < tabs.length; ++i ) {
        // Button
        if ( ( tabs[i - 1][1] == tabs[i - 2][1] ) && ( tabs[i - 3][1] == tabs[i - 2][1] ) && ( tabs[i - 3][1] == tabs[i - 4][1] ) &&
            ( tabs[i][1] == "1" ) && ( tabs[i][0] == tabs[i - 4][0] ) && ( ( tabs[i][6] != 'axes' ) ) ) {

            // console.log( tabs[i][0] + "--4---" + tabs[i - 4][0] )

            var time = tabs[i - 4][1] + tabs[i][1]
            tabs[i][1] = time
            tabs[i + 1][1] = time
            tabs[i + 2][1] = time
            tabs[i + 3][1] = time

            tabs[i - 1].splice( tabs[i] )
            tabs[i - 2].splice( tabs[i] )
            tabs[i - 3].splice( tabs[i] )
            tabs[i - 4].splice( tabs[i] )
        }
        // Axes 
        if ( ( tabs[i - 1][1] == tabs[i - 2][1] ) && ( tabs[i - 3][1] == tabs[i - 2][1] ) && ( tabs[i - 3][1] == tabs[i - 4][1] ) &&
            ( tabs[i][1] == "1" ) && ( tabs[i][0] == tabs[i - 4][0] )
            && ( ( tabs[i][6] == 'axes' ) ) && ( tabs[i][5] == tabs[i - 4][5] && tabs[i][4] == tabs[i - 4][4] ) ) {

            // console.log( tabs[i][0] + "--4---" + tabs[i - 4][0] )

            var time = tabs[i - 4][1] + tabs[i][1]
            tabs[i][1] = time
            tabs[i + 1][1] = time
            tabs[i + 2][1] = time
            tabs[i + 3][1] = time

            tabs[i - 1].splice( tabs[i] )
            tabs[i - 2].splice( tabs[i] )
            tabs[i - 3].splice( tabs[i] )
            tabs[i - 4].splice( tabs[i] )
        }
    }
    // 5 Buttons
    for ( var i = 5; i < tabs.length; ++i ) {
        // Button
        if ( ( tabs[i - 1][1] == tabs[i - 2][1] ) && ( tabs[i - 3][1] == tabs[i - 2][1] ) && ( tabs[i - 3][1] == tabs[i - 5][1] ) &&
            ( tabs[i][1] == "1" ) && ( tabs[i][0] == tabs[i - 5][0] ) && ( ( tabs[i][6] != 'axes' ) ) ) {

            // console.log( tabs[i][0] + "--5---" + tabs[i - 5][0] )

            var time = tabs[i - 5][1] + tabs[i][1]
            tabs[i][1] = time
            tabs[i + 1][1] = time
            tabs[i + 2][1] = time
            tabs[i + 3][1] = time
            tabs[i + 4][1] = time

            tabs[i - 1].splice( tabs[i] )
            tabs[i - 2].splice( tabs[i] )
            tabs[i - 3].splice( tabs[i] )
            tabs[i - 4].splice( tabs[i] )
            tabs[i - 5].splice( tabs[i] )
        }
        // Axes 
        if ( ( tabs[i - 1][1] == tabs[i - 2][1] ) && ( tabs[i - 3][1] == tabs[i - 2][1] ) && ( tabs[i - 3][1] == tabs[i - 5][1] ) &&
            ( tabs[i][1] == "1" ) && ( tabs[i][0] == tabs[i - 5][0] )
            && ( ( tabs[i][6] == 'axes' ) ) && ( tabs[i][5] == tabs[i - 5][5] && tabs[i][4] == tabs[i - 5][4] ) ) {

            // console.log( tabs[i][0] + "--5---" + tabs[i - 5][0] )

            var time = tabs[i - 5][1] + tabs[i][1]
            tabs[i][1] = time
            tabs[i + 1][1] = time
            tabs[i + 2][1] = time
            tabs[i + 3][1] = time
            tabs[i + 4][1] = time

            tabs[i - 1].splice( tabs[i] )
            tabs[i - 2].splice( tabs[i] )
            tabs[i - 3].splice( tabs[i] )
            tabs[i - 4].splice( tabs[i] )
            tabs[i - 5].splice( tabs[i] )


        }
    }
    // 6 Buttons
    for ( var i = 6; i < tabs.length; ++i ) {
        // Button
        if ( ( tabs[i - 1][1] == tabs[i - 2][1] ) && ( tabs[i - 3][1] == tabs[i - 2][1] ) && ( tabs[i - 3][1] == tabs[i - 6][1] ) &&
            ( tabs[i][1] == "1" ) && ( tabs[i][0] == tabs[i - 6][0] ) && ( ( tabs[i][6] != 'axes' ) ) ) {

            // console.log( tabs[i][0] + "--6---" + tabs[i - 6][0] )

            var time = tabs[i - 6][1] + tabs[i][1]
            tabs[i][1] = time
            tabs[i + 1][1] = time
            tabs[i + 2][1] = time
            tabs[i + 3][1] = time
            tabs[i + 4][1] = time
            tabs[i + 5][1] = time

            tabs[i - 1].splice( tabs[i] )
            tabs[i - 2].splice( tabs[i] )
            tabs[i - 3].splice( tabs[i] )
            tabs[i - 4].splice( tabs[i] )
            tabs[i - 5].splice( tabs[i] )
            tabs[i - 6].splice( tabs[i] )
        }
        // Axes 
        if ( ( tabs[i - 1][1] == tabs[i - 2][1] ) && ( tabs[i - 3][1] == tabs[i - 2][1] ) && ( tabs[i - 3][1] == tabs[i - 6][1] ) &&
            ( tabs[i][1] == "1" ) && ( tabs[i][0] == tabs[i - 6][0] )
            && ( ( tabs[i][6] == 'axes' ) ) && ( tabs[i][5] == tabs[i - 6][5] && tabs[i][4] == tabs[i - 6][4] ) ) {

            // console.log( tabs[i][0] + "--6---" + tabs[i - 6][0] )

            var time = tabs[i - 6][1] + tabs[i][1]
            tabs[i][1] = time
            tabs[i + 1][1] = time
            tabs[i + 2][1] = time
            tabs[i + 3][1] = time
            tabs[i + 4][1] = time
            tabs[i + 5][1] = time

            tabs[i - 1].splice( tabs[i] )
            tabs[i - 2].splice( tabs[i] )
            tabs[i - 3].splice( tabs[i] )
            tabs[i - 4].splice( tabs[i] )
            tabs[i - 5].splice( tabs[i] )
            tabs[i - 6].splice( tabs[i] )
        }
    }
    // 7 Buttons
    for ( var i = 7; i < tabs.length; ++i ) {
        // Button
        if ( ( tabs[i - 1][1] == tabs[i - 2][1] ) && ( tabs[i - 3][1] == tabs[i - 2][1] ) && ( tabs[i - 3][1] == tabs[i - 7][1] ) &&
            ( tabs[i][1] == "1" ) && ( tabs[i][0] == tabs[i - 7][0] ) && ( ( ( tabs[i][6] != 'axes' ) ) ) ) {

            // console.log( tabs[i][0] + "--7---" + tabs[i - 7][0] )

            var time = tabs[i - 7][1] + tabs[i][1]
            tabs[i][1] = time
            tabs[i + 1][1] = time
            tabs[i + 2][1] = time
            tabs[i + 3][1] = time
            tabs[i + 4][1] = time
            tabs[i + 5][1] = time
            tabs[i + 6][1] = time

            tabs[i - 1].splice( tabs[i] )
            tabs[i - 2].splice( tabs[i] )
            tabs[i - 3].splice( tabs[i] )
            tabs[i - 4].splice( tabs[i] )
            tabs[i - 5].splice( tabs[i] )
            tabs[i - 6].splice( tabs[i] )
            tabs[i - 7].splice( tabs[i] )
        }

        // Axes 
        if ( ( tabs[i - 1][1] == tabs[i - 2][1] ) && ( tabs[i - 3][1] == tabs[i - 2][1] ) && ( tabs[i - 3][1] == tabs[i - 7][1] ) &&
            ( tabs[i][1] == "1" ) && ( tabs[i][0] == tabs[i - 7][0] )
            && ( ( tabs[i][6] == 'axes' ) ) && ( tabs[i][5] == tabs[i - 7][5] && tabs[i][4] == tabs[i - 7][4] ) ) {

            // console.log( tabs[i][0] + "--7---" + tabs[i - 7][0] )

            var time = tabs[i - 7][1] + tabs[i][1]
            tabs[i][1] = time
            tabs[i + 1][1] = time
            tabs[i + 2][1] = time
            tabs[i + 3][1] = time
            tabs[i + 4][1] = time
            tabs[i + 5][1] = time
            tabs[i + 6][1] = time

            tabs[i - 1].splice( tabs[i] )
            tabs[i - 2].splice( tabs[i] )
            tabs[i - 3].splice( tabs[i] )
            tabs[i - 4].splice( tabs[i] )
            tabs[i - 5].splice( tabs[i] )
            tabs[i - 6].splice( tabs[i] )
            tabs[i - 7].splice( tabs[i] )
        }
    }
    // 8 Buttons
    for ( var i = 8; i < tabs.length; ++i ) {
        // Button
        if ( ( tabs[i - 1][1] == tabs[i - 2][1] ) && ( tabs[i - 3][1] == tabs[i - 2][1] ) && ( tabs[i - 3][1] == tabs[i - 8][1] ) &&
            ( tabs[i][1] == "1" ) && ( tabs[i][0] == tabs[i - 8][0] ) && ( ( tabs[i][6] != 'axes' ) ) ) {

            // console.log( tabs[i][0] + "--8---" + tabs[i - 8][0] )

            var time = tabs[i - 8][1] + tabs[i][1]
            tabs[i][1] = time
            tabs[i + 1][1] = time
            tabs[i + 2][1] = time
            tabs[i + 3][1] = time
            tabs[i + 4][1] = time
            tabs[i + 5][1] = time
            tabs[i + 6][1] = time
            tabs[i + 7][1] = time

            tabs[i - 1].splice( tabs[i] )
            tabs[i - 2].splice( tabs[i] )
            tabs[i - 3].splice( tabs[i] )
            tabs[i - 4].splice( tabs[i] )
            tabs[i - 5].splice( tabs[i] )
            tabs[i - 6].splice( tabs[i] )
            tabs[i - 7].splice( tabs[i] )
            tabs[i - 8].splice( tabs[i] )
        }

        // Axes 
        if ( ( tabs[i - 1][1] == tabs[i - 2][1] ) && ( tabs[i - 3][1] == tabs[i - 2][1] ) && ( tabs[i - 3][1] == tabs[i - 8][1] ) &&
            ( tabs[i][1] == "1" ) && ( tabs[i][0] == tabs[i - 8][0] )
            && ( ( tabs[i][6] == 'axes' ) ) && ( tabs[i][5] == tabs[i - 8][5] && tabs[i][4] == tabs[i - 8][4] ) ) {

            // console.log( tabs[i][0] + "--8---" + tabs[i - 8][0] )

            var time = tabs[i - 8][1] + tabs[i][1]
            tabs[i][1] = time
            tabs[i + 1][1] = time
            tabs[i + 2][1] = time
            tabs[i + 3][1] = time
            tabs[i + 4][1] = time
            tabs[i + 5][1] = time
            tabs[i + 6][1] = time
            tabs[i + 7][1] = time

            tabs[i - 1].splice( tabs[i] )
            tabs[i - 2].splice( tabs[i] )
            tabs[i - 3].splice( tabs[i] )
            tabs[i - 4].splice( tabs[i] )
            tabs[i - 5].splice( tabs[i] )
            tabs[i - 6].splice( tabs[i] )
            tabs[i - 7].splice( tabs[i] )
            tabs[i - 8].splice( tabs[i] )
        }
    }




    for ( var i = 0; i < tabs.length; i++ ) {

        if ( tabs[i][0] != null ) {
            // if ( tabs[i][0] == 'pause' ) {
            //     tabs.pop();
            // }
            game.push( tabs[i] )

        }
    }

    // TAb Game

    // 2 Buttons 
    for ( var i = game.length - 1; i > 2; i-- ) {
        // Button
        if ( ( game[i][0] == game[i - 2][0] ) && ( game[i][0] != 'pause' ) && ( game[i][3] == game[i - 2][3] ) && ( ( game[i][6] != 'axes' ) )
        ) {
            // console.log( game[i][0] + "---2.1--" + game[i - 2][0] )

            var time = game[i - 2][1] + game[i][1]
            game[i - 2][1] = time
            game[i].splice( game[i] )
        }
        // Axes 
        if ( ( game[i][0] == game[i - 2][0] ) && ( game[i][0] != 'pause' ) && ( game[i][3] == game[i - 2][3] )
            && ( ( ( game[i][6] == 'axes' ) ) && ( game[i][5] == game[i - 2][5] && game[i][4] == game[i - 2][4] ) )
        ) {
            // console.log( game[i][0] + "---2.1--" + game[i - 2][0] )

            var time = game[i - 2][1] + game[i][1]
            game[i - 2][1] = time
            game[i].splice( game[i] )
        }
    }

    // 3 Buttons 
    for ( var i = game.length - 2; i > 3; i-- ) {
        // Button
        if ( ( game[i][0] == game[i - 3][0] ) && ( game[i][0] != 'pause' ) && ( game[i][3] == game[i - 3][3] ) && ( ( game[i][6] != 'axes' ) )
        ) {
            // console.log( game[i][0] + "---3.1--" + game[i - 3][0] )

            var time = game[i - 3][1] + game[i][1]
            game[i - 3][1] = time
            game[i].splice( game[i] )
        }
        // Axes 
        if ( ( game[i][0] == game[i - 3][0] ) && ( game[i][0] != 'pause' ) && ( game[i][3] == game[i - 3][3] )
            && ( ( ( game[i][6] == 'axes' ) ) && ( game[i][5] == game[i - 3][5] && game[i][4] == game[i - 3][4] ) ) ) {
            //console.log( game[i][0] + "---3.1--" + game[i - 3][0] )

            var time = game[i - 3][1] + game[i][1]
            game[i - 3][1] = time
            game[i].splice( game[i] )
        }
    }

    // 4 Buttons 
    for ( var i = game.length - 2; i > 4; i-- ) {
        // Button
        if ( ( game[i][0] == game[i - 4][0] ) && ( game[i][0] != 'pause' ) && ( game[i][3] == game[i - 4][3] ) && ( ( game[i][6] != 'axes' ) )
        ) {
            // console.log( game[i][0] + "---4.1--" + game[i - 4][0] )

            var time = game[i - 4][1] + game[i][1]
            game[i - 4][1] = time
            game[i].splice( game[i] )
        }
        // Axes 
        if ( ( game[i][0] == game[i - 4][0] ) && ( game[i][0] != 'pause' ) && ( game[i][3] == game[i - 4][3] )
            && ( ( ( game[i][6] == 'axes' ) ) && ( game[i][5] == game[i - 4][5] && game[i][4] == game[i - 4][4] ) ) ) {
            // console.log( game[i][0] + "---4.1--" + game[i - 4][0] )

            var time = game[i - 4][1] + game[i][1]
            game[i - 4][1] = time
            game[i].splice( game[i] )
        }
    }

    // 5 Buttons 
    for ( var i = game.length - 2; i > 5; i-- ) {
        // Button
        if ( ( game[i][0] == game[i - 5][0] ) && ( game[i][0] != 'pause' ) && ( game[i][3] == game[i - 5][3] ) && ( ( game[i][6] != 'axes' ) )
        ) {
            // console.log( game[i][0] + "---5.1--" + game[i - 5][0] )

            var time = game[i - 5][1] + game[i][1]
            game[i - 5][1] = time
            game[i].splice( game[i] )
        }
        // Axes 
        if ( ( game[i][0] == game[i - 5][0] ) && ( game[i][0] != 'pause' ) && ( game[i][3] == game[i - 5][3] )
            && ( ( ( game[i][6] == 'axes' ) ) && ( game[i][5] == game[i - 5][5] && game[i][4] == game[i - 5][4] ) ) ) {
            // console.log( game[i][0] + "---5.1--" + game[i - 5][0] )

            var time = game[i - 5][1] + game[i][1]
            game[i - 5][1] = time
            game[i].splice( game[i] )
        }
    }
    // 6 Buttons 
    for ( var i = game.length - 2; i > 6; i-- ) {
        // Button
        if ( ( game[i][0] == game[i - 6][0] ) && ( game[i][0] != 'pause' ) && ( game[i][3] == game[i - 6][3] ) && ( ( game[i][6] != 'axes' ) )
        ) {
            // console.log( game[i][0] + "---6.1--" + game[i - 6][0] )

            var time = game[i - 6][1] + game[i][1]
            game[i - 6][1] = time
            game[i].splice( game[i] )
        }
        // Axes 
        if ( ( game[i][0] == game[i - 6][0] ) && ( game[i][0] != 'pause' ) && ( game[i][3] == game[i - 6][3] )
            && ( ( ( game[i][6] == 'axes' ) ) && ( game[i][5] == game[i - 6][5] && game[i][4] == game[i - 6][4] ) ) ) {
            // console.log( game[i][0] + "---6.1--" + game[i - 6][0] )

            var time = game[i - 6][1] + game[i][1]
            game[i - 6][1] = time
            game[i].splice( game[i] )
        }
    }
    // 7 Buttons 
    for ( var i = game.length - 2; i > 7; i-- ) {
        // Button
        if ( ( game[i][0] == game[i - 7][0] ) && ( game[i][0] != 'pause' ) && ( game[i][3] == game[i - 7][3] ) && ( ( game[i][6] != 'axes' ) )
        ) {
            // console.log( game[i][0] + "---7.1--" + game[i - 7][0] )

            var time = game[i - 7][1] + game[i][1]
            game[i - 7][1] = time
            game[i].splice( game[i] )
        }
        // Axes 

        if ( ( game[i][0] == game[i - 7][0] ) && ( game[i][0] != 'pause' ) && ( game[i][3] == game[i - 7][3] )
            && ( ( ( game[i][6] == 'axes' ) ) && ( game[i][5] == game[i - 7][5] && game[i][4] == game[i - 7][4] ) ) ) {
            // console.log( game[i][0] + "---7.1--" + game[i - 7][0] )

            var time = game[i - 7][1] + game[i][1]
            game[i - 7][1] = time
            game[i].splice( game[i] )
        }
    }
    // 8 Buttons 
    for ( var i = game.length - 2; i > 8; i-- ) {
        // Button
        if ( ( game[i][0] == game[i - 8][0] ) && ( game[i][0] != 'pause' ) && ( game[i][3] == game[i - 8][3] ) && ( ( game[i][6] != 'axes' ) )
        ) {
            // console.log( game[i][0] + "---8.1--" + game[i - 8][0] )

            var time = game[i - 8][1] + game[i][1]
            game[i - 8][1] = time
            game[i].splice( game[i] )
        }
        // Axes 
        if ( ( game[i][0] == game[i - 8][0] ) && ( game[i][0] != 'pause' ) && ( game[i][3] == game[i - 8][3] ) && ( ( game[i][6] != 'axes' ) )
            && ( ( ( game[i][6] == 'axes' ) ) && ( game[i][5] == game[i - 8][5] && game[i][4] == game[i - 8][4] ) ) ) {
            // console.log( game[i][0] + "---8.1--" + game[i - 8][0] )

            var time = game[i - 8][1] + game[i][1]
            game[i - 8][1] = time
            game[i].splice( game[i] )
        }
    }

    for ( var i = 0; i < game.length; i++ ) {

        if ( game[i][0] != null ) {
           
            // if ( ( game[i][1] > 10 ) && ( game[i][1] > 10 ) )
            // {
                var col = table.insertCell();
                if ( ( game[i][6] == 'axes' ) ) {
                    col.innerHTML = game[i][0] + "||" + game[i][4] + "||" + game[i][5] + "||" + game[i][1] + "ms";
                }
                else {
                    col.innerHTML = game[i][0] + "||" + game[i][1] + "ms";
                }
        // }



        }
    }

    console.log( game );

    const dataTable = document.querySelector( '#data' )
    dataTable.style.display = "block"


}


