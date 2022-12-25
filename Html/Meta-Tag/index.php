
<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv='cache-control' content='no-cache'>
    <meta http-equiv='expires' content='0'>
    <meta http-equiv='pragma' content='no-cache'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
    <meta name="_token" content="{{csrf_token()}}" />
    <title>
        @hasSection('page-title')
        RLM Sales - @yield('page-title')
        @else
        RLM Sales
        @endif
    </title>


    <link rel="icon" href="{{ asset('front-assets/images/favIcon.png') }}" />
    <link rel="stylesheet" href="{{ asset('front-assets/css/aos.css') }}">
    <link rel="stylesheet" href="{{ asset('front-assets/css/animate.min.css') }}">
    <link rel="stylesheet" href="{{ asset('front-assets/css/owl.carousel.min.css') }}">
    <link rel="stylesheet" href="{{ asset('front-assets/css/jquery.fancybox.min.css') }}">
    <link rel="stylesheet" href="{{ asset('front-assets/css/main.css') }}">
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" />
    <link rel="stylesheet" href="{{ asset('front-assets/css/bootstrap.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('front-assets/css/style.css') }}" />
    <link rel="stylesheet" href="{{ asset('front-assets/css/responsive.css') }}" />


    <style>
        .loader_main_wrap {
            background: #0c0c0da1;
            height: 100vh;
            position: absolute;
            width: 100%;
            z-index: 999999;
            display: none;
        }

        .web-loading {
            border: 7px solid #f3f3f3;
            border-top: 7px solid #000000;
            border-radius: 50%;
            width: 120px;
            height: 120px;
            position: absolute;
            top: 50%;
            left: 46%;
            transform: translateX(-50%) translateY(-50%);
            animation: spin 2s linear infinite;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }
    </style>


    @stack('styles')
</head>

<body>
    <div class="loader_main_wrap">
        <div class="web-loading"></div>
    </div>


    @include('front.layouts.header')

    @include('front.layouts.nav')

    @yield('main-content')

    @include('front.layouts.footer')


    <!--calender modal -->
    <div class="calender-modal-main modal fade" id="calender-checking" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="calendar">
                        <div id="calendar_header"><i class="icon-chevron-left"></i>
                            <h1></h1><i class="icon-chevron-right"></i>
                        </div>
                        <div id="calendar_weekdays"></div>
                        <div id="calendar_content"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Track your order modal  -->
    <!-- <div class="track-modal-MAIN modal fade" id="trackOrder" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body pt-0">
                    <div class="track-your-order-modal">
                        <h2>Check your status here..</h2>
                        <form>
                            <div class="row">
                                <div class="col input-padding">
                                    <input type="text" class="form-control" placeholder="Your name">
                                </div>
                                <div class="col input-padding">
                                    <input type="text" class="form-control" placeholder="Your email">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col input-padding">
                                    <input type="text" class="form-control" placeholder="Contact number">
                                </div>
                                <div class="col input-padding">
                                    <input type="text" class="form-control" placeholder="Order ID">
                                </div>
                            </div>
                        </form>
                        <div class="inner-btns">
                            <a href="javascript:void(0);"><i class="fas fa-envelope"></i> SUBMIT</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

    <!-- Place An Order Modal -->
    <div class="already-place-an-order-modal modal fade" id="checkStatus" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="need-status-modal home-banner-main-wrap-6">
                        <div class="banner-6-content">
                            <h1>NEED STATUS OR</h1>
                            <h2>TRACKING ON YOUR ORDER ?</h2>
                            <h3><a href="mailto:updates@vestil.com"> E-mail: <span>updates@vestil.com</span></a> <br> OR</h3>
                            <h4><a href="tel: 800.348.0868">CALL 800.348.0868 EXT 763</a></h4>
                            <h5>REMEMBER, ALWAYS PROVIDE YOUR RLM ORDER # (S...#)</h5>
                            <div class="banner-6-icons">
                                <div class="icon-1">
                                    <img src="{{ asset('front-assets/images/banner/banner-6a.png') }}">
                                    <p>Pick Up</p>
                                </div>
                                <div class="icon-2">
                                    <img src="{{ asset('front-assets/images/banner/banner-6b.png') }}">
                                    <p>In Process</p>
                                </div>
                                <div class="icon-3">
                                    <img src="{{ asset('front-assets/images/banner/banner-6c.png') }}">
                                    <p>On Delivery</p>
                                </div>
                                <div class="icon-4">
                                    <img src="{{ asset('front-assets/images/banner/banner-6d.png') }}">
                                    <p>Delivered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Place An Order Modal -->
    <!-- <div class="already-place-an-order-modal modal fade" id="checkStatus2" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="rlm-update-inner rlm-advantages-main">
                        <ul>
                            <li>
                                <a href="javascript:void(0);">
                                    <h4>TIPS :</h4>
                                    <p><span>1)</span> Always provide your RLM order # (S...#) when checking status or following up with anything regarding your order.</p>
                                    <p class="my-2"> <span>2)</span> Make sure to inspect your product as soon as it arrives. If it is damaged beyond what you would accept, you should "reject" it. Contact RLM to let us know, so we can alert the manufacturer. If you find hidden damage after receiving it, contact RLM "immediately" (within 2 days of receiving the unit); as there is a very small "window" to effectively submit and address a freight claim. If there is any type of manufacturing defect, please alert RLM immediately.</p>
                                    <p class="text-center">*** Please be ready to provide photos of the damage. *** </p>
                                </a>
                            </li>
                            <li>
                                <h4>STATUS & TRACKING :</h4>
                                <p> Please E-mail <a href="mailto:status@vestil.com">status@vestil.com</a> or Call <a href="tel:800.348.0868">800.348.0868 </a> Ext. 763 for status or tracking requests. </p>

                                <p>Remember to provide your RLM order # (S...#) in the subject.</p>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <h4>RETURNS :</h4>
                                    <p> If you have a product that is eligible for a return, please contact RLM as soon as possible. At the direction of the manufacturer, all returns must be accomplished within 30 days. If you return a product, the customer will be responsible for the freight back, any refurbishing fees, and a 20% restock.
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

    <!-- RLM ADVANTAGE modal  -->
    <div class="rlm-advantages-main modal fade" id="rlm-advantages" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header mb-2">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body pt-0">
                    <div class="rlm-update-inner rlm-advantages-main">
                        <ul>
                            <li>
                                <a href="javascript:void(0);">
                                    <h4>FAMILY OWNED BUSINESS</h4>
                                    <p>• No Red Tape – Skip jumping through loops to get things done.</p>
                                    <p>• Be a person, not a number.</p>
                                    <p>• Flexibility & Versatility - RLM combines a small business feel, while staying
                                        competitive with some of the biggest names in the industry </p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <h4>ACCESS TO MORE PRODUCT</h4>
                                    <p>• RLM has access to 100% of the Vestil Product Line. Most resellers only provide a
                                        select few.</p>
                                    <p>• Our customers have access to over 30,000 Skus and growing. </p>
                                    <p>• New Products Included.</p>
                                    <p>• Custom Fabrications Available. </p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <h4>COMPETITIVE PRICING</h4>
                                    <p>As a small business, we do not have the overhead most of our larger competitors
                                        have to consider. This allows us to provide members...</p>
                                    <p>• Discounts "Everyday" on "Every" Product* </p>
                                    <p>• Price Match Guarantee* </p>
                                    <p>• Recurring Order Discounts </p>
                                    <p>• Volume Discounts </p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <h4>EXPEDITE SERVICES</h4>
                                    <p>RLM Sales is able to partner with RLM Hauling in order to provide its customers
                                        with expedited shipping services throughout the U.S. on qualifying orders.* </p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <h4>PRODUCT KNOWLEDGE </h4>
                                    <p>Most resellers or distributors are repping multiple brands which makes it
                                        challenging to have a deeper level of understanding about any one brand.  The
                                        downside to being a "Jack of all trades, master of none" is, it can sometimes be
                                        hard to know what all you truly have available to one's customer.  RLM, however,
                                        focuses on one brand; and that one brand has an impressive versatile line of
                                        over 30,000 skus for its customers.  Having a deeper understanding of the product line allows RLM customers to save time and
                                        energy when trying to determine what exactly is available to them.</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Search modal -->
    <div class="ida-search rlm-advantages-main modal fade" id="deal-and-discount-ida" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header mb-2">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body pt-0">
                    <div class="rlm-update-inner rlm-advantages-main">
                        <h1 class="deal-heading-main">You Are Now Leaving the RLM Site</h1>
                        <h4 class="text-center">You are being directed to the Vestil site. Vestil only sells through resellers (no direct sales). As RLM offers the entire Vestil Product Line, please return to the RLM Tab once you have your specific products, in order to receive industry leading pricing. Thank you.<br /> "PLEASE <a href="https://www.vestil.com/" id="urlSet" target="_blank">CLICK HERE</a> TO CONTINUE TO THE VESTIL SITE"</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Deal ANd Discount modal -->
    <div class="rlm-advantages-main modal fade" id="deal-and-discount-id" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header mb-2">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body pt-0">
                    <div class="rlm-update-inner rlm-advantages-main">
                        <h1 class="deal-heading-main">DEALS & DISCOUNTS </h1>
                        <ul>
                            <li>
                                <h4>FREE MEMBERSHIP :</h4>
                                <p>Sign up for a free RLM Membership and start saving "instantly" on "every" purchase.
                                    That's not all. Becoming a member also allows you to receive all other benefits listed below. Enjoy the
                                    benefits of the <a href="javascript:void(0);" data-toggle="modal" data-target="#rlm-advantages" data-dismiss="modal"> RLM Advantage </a>.</p>

                            </li>
                            <li>
                                <h4>FREE CONSULTATIONS :</h4>
                                <p>Every company that has a facility may receive a free consultation with RLM. During
                                    this time, we will walk through the facility to get a better idea of their goals and
                                    vision, as well as share any recommendations we may have. There is no obligation to
                                    purchase. Free consultations may also be available if your company has a large
                                    project you plan to undergo (new construction, remodeling, add on, etc.).</p>
                            </li>
                            <li>
                                <h4>FREE TRAININGS :</h4>
                                <p>We offer a free training to companies so they may get a better idea of what all is
                                    available to them by working with RLM and Vestil. With over 30,000 skus, and
                                    growing, customers may be surprised what products we have to offer for their
                                    industry, and at some of the most competitive prices available.</p>
                            </li>
                            <li>
                                <h4>EVERYDAY DISCOUNTS :</h4>
                                <p>When you become an RLM Member, you receive an automatic discount off "every" product "every" day. Additional discounts are available as well (i.e. volume, loyalty, recurring, etc.).</p>
                            </li>
                            <li>
                                <h4>VOLUME DISCOUNTS :</h4>
                                <p>RLM offers additional "volume" discounts to any customer with larger qualifying
                                    orders. This is great for larger companies, or companies with several locations.
                                    Since RLM's Volume Discount also includes large "dollar" amount orders, it is also
                                    ideal for customers purchasing for new construction.</p>
                            </li>
                            <li>
                                <h4>RLM PRICE MATCH GUARANTEE* :</h4>
                                <p>RLM will beat any market valued price for Vestil products. Simply provide a link with
                                    the advertised price. Please click here to submit for a <a href="javascript:void(0);" data-toggle="modal" data-target="#price-match-gurentee" data-dismiss="modal">
                                        price match </a>. * The product must be "apples to apples" and new (not used,
                                    returned, or from an Ebay or similar site). The RLM Price Match Guarantee ensures our customers have the ability to always get the best price on all of Vestil's 30,000 skus.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- product listing MOdaL -->
    <!-- <div class="product-lisiting-MOdaL modal fade" id="product-lisiting" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header mb-2">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <section class="products product-enlist-main-wrap  product-modal-body-inner pt-0 pb-0">
                        <div class="container-fluid">
                            <div class="row" id="bodyRow">
                                <div class="col-md-12 text-center pb-4 pt-0">
                                    <h1 class="wow fadeInLeftBig"><span>LOREM ISPUM </span>PRODUCTS</h1>
                                </div>
                                <div class="col-md-3">
                                    <div class="product-inner-wrap">
                                        <a href="javascript:void(0);">
                                            <div class="inner-image">
                                                <img src="{{ asset('front-assets/images/megamenu/hot-commodities/1.jpg') }}" class="img-fluid" />
                                            </div>
                                        </a>
                                        <h4>HOPPERS</h4>
                                        <div class="read-more-btn"> <a href="javascript:void(0);"> Product Detail <i class="fas fa-arrow-right"></i></a></div>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="product-inner-wrap">
                                        <a href="javascript:void(0);">
                                            <div class="inner-image">
                                                <img src="{{ asset('front-assets/images/megamenu/hot-commodities/1.jpg') }}" class="img-fluid" />
                                            </div>
                                        </a>
                                        <h4>HOPPERS</h4>
                                        <div class="read-more-btn"> <a href="javascript:void(0);"> Product Detail <i class="fas fa-arrow-right"></i></a></div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="product-inner-wrap">
                                        <a href="javascript:void(0);">
                                            <div class="inner-image">
                                                <img src="{{ asset('front-assets/images/megamenu/hot-commodities/1.jpg') }}" class="img-fluid" />
                                            </div>
                                        </a>
                                        <h4>HOPPERS</h4>
                                        <div class="read-more-btn"> <a href="javascript:void(0);"> Product Detail <i class="fas fa-arrow-right"></i></a></div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="product-inner-wrap">
                                        <a href="javascript:void(0);">
                                            <div class="inner-image">
                                                <img src="{{ asset('front-assets/images/megamenu/hot-commodities/1.jpg') }}" class="img-fluid" />
                                            </div>
                                        </a>
                                        <h4>HOPPERS</h4>
                                        <div class="read-more-btn"> <a href="javascript:void(0);"> Product Detail <i class="fas fa-arrow-right"></i></a></div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="product-inner-wrap">
                                        <a href="javascript:void(0);">
                                            <div class="inner-image">
                                                <img src="{{ asset('front-assets/images/megamenu/hot-commodities/1.jpg') }}" class="img-fluid" />
                                            </div>
                                        </a>
                                        <h4>HOPPERS</h4>
                                        <div class="read-more-btn"> <a href="javascript:void(0);"> Product Detail <i class="fas fa-arrow-right"></i></a></div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="product-inner-wrap">
                                        <a href="javascript:void(0);">
                                            <div class="inner-image">
                                                <img src="{{ asset('front-assets/images/megamenu/hot-commodities/1.jpg') }}" class="img-fluid" />
                                            </div>
                                        </a>
                                        <h4>HOPPERS</h4>
                                        <div class="read-more-btn"> <a href="javascript:void(0);"> Product Detail <i class="fas fa-arrow-right"></i></a></div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="product-inner-wrap">
                                        <a href="javascript:void(0);">
                                            <div class="inner-image">
                                                <img src="{{ asset('front-assets/images/megamenu/hot-commodities/1.jpg') }}" class="img-fluid" />
                                            </div>
                                        </a>
                                        <h4>HOPPERS</h4>
                                        <div class="read-more-btn"> <a href="javascript:void(0);"> Product Detail <i class="fas fa-arrow-right"></i></a></div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="product-inner-wrap">
                                        <a href="javascript:void(0);">
                                            <div class="inner-image">
                                                <img src="{{ asset('front-assets/images/megamenu/hot-commodities/1.jpg') }}" class="img-fluid" />
                                            </div>
                                        </a>
                                        <h4>HOPPERS</h4>
                                        <div class="read-more-btn"> <a href="javascript:void(0);"> Product Detail <i class="fas fa-arrow-right"></i></a></div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="product-inner-wrap">
                                        <a href="javascript:void(0);">
                                            <div class="inner-image">
                                                <img src="{{ asset('front-assets/images/megamenu/hot-commodities/1.jpg') }}" class="img-fluid" />
                                            </div>
                                        </a>
                                        <h4>HOPPERS</h4>
                                        <div class="read-more-btn"> <a href="javascript:void(0);"> Product Detail <i class="fas fa-arrow-right"></i></a></div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="product-inner-wrap">
                                        <a href="javascript:void(0);">
                                            <div class="inner-image">
                                                <img src="{{ asset('front-assets/images/megamenu/hot-commodities/1.jpg') }}" class="img-fluid" />
                                            </div>
                                        </a>
                                        <h4>HOPPERS</h4>
                                        <div class="read-more-btn"> <a href="javascript:void(0);"> Product Detail <i class="fas fa-arrow-right"></i></a></div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="product-inner-wrap">
                                        <a href="javascript:void(0);">
                                            <div class="inner-image">
                                                <img src="{{ asset('front-assets/images/megamenu/hot-commodities/1.jpg') }}" class="img-fluid" />
                                            </div>
                                        </a>
                                        <h4>HOPPERS</h4>
                                        <div class="read-more-btn"> <a href="javascript:void(0);"> Product Detail <i class="fas fa-arrow-right"></i></a></div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="product-inner-wrap">
                                        <a href="javascript:void(0);">
                                            <div class="inner-image">
                                                <img src="{{ asset('front-assets/images/megamenu/hot-commodities/1.jpg') }}" class="img-fluid" />
                                            </div>
                                        </a>
                                        <h4>HOPPERS</h4>
                                        <div class="read-more-btn"> <a href="javascript:void(0);"> Product Detail <i class="fas fa-arrow-right"></i></a></div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="product-inner-wrap">
                                        <a href="javascript:void(0);">
                                            <div class="inner-image">
                                                <img src="{{ asset('front-assets/images/megamenu/hot-commodities/1.jpg') }}" class="img-fluid" />
                                            </div>
                                        </a>
                                        <h4>HOPPERS</h4>
                                        <div class="read-more-btn"> <a href="javascript:void(0);"> Product Detail <i class="fas fa-arrow-right"></i></a></div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="product-inner-wrap">
                                        <a href="javascript:void(0);">
                                            <div class="inner-image">
                                                <img src="{{ asset('front-assets/images/megamenu/hot-commodities/1.jpg') }}" class="img-fluid" />
                                            </div>
                                        </a>
                                        <h4>HOPPERS</h4>
                                        <div class="read-more-btn"> <a href="javascript:void(0);"> Product Detail <i class="fas fa-arrow-right"></i></a></div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="product-inner-wrap">
                                        <a href="javascript:void(0);">
                                            <div class="inner-image">
                                                <img src="{{ asset('front-assets/images/megamenu/hot-commodities/1.jpg') }}" class="img-fluid" />
                                            </div>
                                        </a>
                                        <h4>HOPPERS</h4>
                                        <div class="read-more-btn"> <a href="javascript:void(0);"> Product Detail <i class="fas fa-arrow-right"></i></a></div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="product-inner-wrap">
                                        <a href="javascript:void(0);">
                                            <div class="inner-image">
                                                <img src="{{ asset('front-assets/images/megamenu/hot-commodities/1.jpg') }}" class="img-fluid" />
                                            </div>
                                        </a>
                                        <h4>HOPPERS</h4>
                                        <div class="read-more-btn"> <a href="javascript:void(0);"> Product Detail <i class="fas fa-arrow-right"></i></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div> -->

    <!--place An Order modal working -->
    <div class="request-form modal fade" id="placeAnOrder" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body pt-0">
                    <div class="track-your-order-modal please-contact">
                        <form id="place-an-order-form">
                            <h2><strong>CONTACT INFORMATION</strong></h2>
                            <div class="col-md-12 alert alert-danger place-an-order-alert" style="display: none">
                            </div>
                            <div class="form-row">
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="date">Date</label>
                                    <input type="date" class="form-control" id="date" name="date" placeholder="">
                                </div>
                                <div class="col-md-6 col-12 input-padding">
                                    <label>Company (IF APPLICABLE)</label>
                                    <input type="text" class="form-control" name="company" placeholder="0000001">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="fname">First Name</label>
                                    <input type="text" class="form-control" id="fname" name="first_name" placeholder="">
                                </div>
                                <div class="col-md-6 col-12 input-padding">
                                    <label>Last Name</label>
                                    <input type="text" class="form-control" name="last_name" placeholder="">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">Best Phone #</label>
                                    <input type="number" class="form-control" name="phone" id="" placeholder="">
                                </div>
                                <div class="col-md-6 col-12 input-padding">
                                    <label>Email address</label>
                                    <input type="email" class="form-control" name="email" placeholder="">
                                </div>
                            </div>
                            <h2><strong>BILL TO INFORMATION</strong></h2>
                            <label for="Address">Ship To Address</label>
                            <div class="row">
                                <div class="col-12 input-padding">
                                    <input type="text" class="form-control" name="customer_name" id="Address" placeholder="Customer Name">
                                </div>
                                <div class="col-12 input-padding">
                                    <textarea cols="30" class="form-control" name="shipping_address" rows="4" placeholder="Customer Address"></textarea>
                                </div>
                            </div>
                            <table class="table" style="width:100%">
                                <thead>
                                    <tr>
                                        <th scope="col" style="width:4%">#</th>
                                        <th scope="col" style="width:10%">Item</th>
                                        <th scope="col" style="width:40%">Description</th>
                                        <th scope="col" style="width:11%">Model #</th>
                                        <th scope="col" style="width:13%">Unit Price</th>
                                        <th scope="col" style="width:11%">Quantity</th>
                                        <th scope="col" style="width:11%">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th class="cancel-line" onclick="addClone(this)">+</th>
                                        <td>
                                            <input class="form-control" type="text" name="item[]" placeholder="">
                                        </td>
                                        <td>
                                            <textarea class="form-control" id="" name="description[]" rows="1" placeholder="Enter description"></textarea>
                                        </td>
                                        <td>
                                            <input class="form-control" type="text" name="model[]" placeholder="">
                                        </td>
                                        <td>
                                            <input class="form-control" type="text" name="unit_price[]" placeholder="0.00">
                                        </td>
                                        <td>
                                            <input class="form-control" type="text" name="quantity[]" placeholder="0.00">
                                        </td>
                                        <td>
                                            <input class="form-control" type="text" name="amount[]" placeholder="0.00">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </form>
                        <div class="inner-btns text-left for-flex">
                            <div class="placeORDER-Flex1">
                                <a href="javascript:void(0);" id="place-an-order-btn" onclick="submitPlaceAnOrder(this)">SUBMIT</a>
                            </div>
                            <div class="placeORDER-Flex2">
                                <a href="tel:+8774658581"><i class="fa-solid fa-phone"></i> CALL NOW</a>
                                <a href="mailto:rlmsalesllc@gmail.com?subject= NEW ORDER"><i class="fas fa-envelope"></i> EMAIL NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- online request form modal  working -->
    <div class="request-form modal fade" id="online-request-form" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body pt-0">
                    <div class="track-your-order-modal ">
                        <form id="online-request-form-element">
                            <h2><strong>CUSTOMER INFORMATION</strong></h2>
                            <div class="col-md-12 alert alert-danger online-request-form-alert" style="display: none">
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">First name <span style="color: red;">*</span></label>
                                    <input type="text" class="form-control" name="first_name" placeholder="" value="">
                                </div>
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">Last name <span style="color: red;">*</span></label>
                                    <input type="text" class="form-control" name="last_name" placeholder="" value="">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">Email Address <span style="color: red;">*</span></label>
                                    <input type="email" class="form-control" name="email" placeholder="" value="">
                                </div>
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">Phone number <span style="color: red;">*</span></label>
                                    <input type="text" class="form-control" name="phone" placeholder="" value="">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">RLM Account Number </label>
                                    <input type="text" class="form-control" name="account_number" placeholder="(If applicable)" value="">
                                </div>
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">Company Name</label>
                                    <input type="text" class="form-control" name="company_name" placeholder="(If applicable)" value="">
                                </div>
                            </div>

                            <h2 class="mt-2"><strong>SHIPPING INFORMATION</strong></h2>
                            <div class="row">
                                <div class="col-12 input-padding">
                                    <label for="">Shipping Address:</label>
                                    <input type="text" class="form-control" name="shipping_address" placeholder="Full ship to address" value="">
                                </div>
                            </div>
                            <div class="shipping-location-radios">
                                <label>What type of ship to location is this ?</label>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="locations" id="Residential" value="Residential" checked>
                                    <label class="form-check-label" for="Residential">Residential</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="locations" id="Commercial" value="Commercial">
                                    <label class="form-check-label" for="Commercial">Commercial</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="locations" id="Military" value="Military">
                                    <label class="form-check-label" for="Military">Military</label>
                                </div>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="locations" id="Others" value="Others">
                                    <label class="form-check-label" for="Others">Others</label>
                                </div>

                                <div class="form-check form-check-inline">
                                    <input class="form-control" type="text" name="location_others" value="">
                                </div>
                            </div>
                            <div class="shipping-location-radios">
                                <label>Are there any special requirements for this location ?</label>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="special_request" id="Liftgate" value="Liftgate" checked>
                                    <label class="form-check-label" for="Liftgate">Liftgate</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="special_request" id="Limited Access" value="Limited Access">
                                    <label class="form-check-label" for="Limited Access">Limited Access</label>
                                </div>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="special_request" id="Others2" value="Others">
                                    <label class="form-check-label" for="Others2">Others</label>
                                </div>

                                <div class="form-check form-check-inline">
                                    <input class="form-control" type="text" name="special_request_others" value="">
                                </div>
                            </div>


                            <h2 class="mt-2"><strong>PRODUCT INFORMATION</strong></h2>
                            <div class="row">
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">Model #</label>
                                    <input type="text" class="form-control" name="model" placeholder="(If applicable)" value="">
                                </div>
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">Quantity <span style="color: red;">*</span></label>
                                    <input type="text" class="form-control" name="quantity" placeholder="" value="">
                                </div>
                            </div>

                            <div class="textarea-description">
                                <label for="">What are you looking for ?</label>
                                <textarea cols="30" class="form-control" rows="4" name="description" placeholder="Enter Description"></textarea>
                            </div>
                        </form>

                        <div class="inner-btns">
                            <a href="javascript:void(0);" id="online-request-form-btn" onclick="submitOnlineRequestForm(this)"><i class="fas fa-envelope"></i> SUBMIT</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- online-confirm-form modal working -->
    <div class="request-form modal fade" id="online-confirm-form" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body pt-0">
                    <div class="track-your-order-modal">
                        <form id="online-confirm-form-element">
                            <h2><strong>BILL TO INFORMATION</strong></h2>
                            <div class="col-md-12 alert alert-danger online-confirm-form-alert" style="display: none">
                            </div>



                            <div class="row">
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">Date<span style="color: red;">*</span></label>
                                    <input type="date" class="form-control" name="" value="">
                                </div>
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">Business (IF APPLICABLE)</label>
                                    <input type="text" class="form-control" name="" value="" placeholder="">
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">First name <span style="color: red;">*</span></label>
                                    <input type="text" class="form-control" name="first_name" value="" placeholder="">
                                </div>
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">Last name </label>
                                    <input type="text" class="form-control" name="last_name" value="" placeholder="">
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">Email Address <span style="color: red;">*</span></label>
                                    <input type="email" class="form-control" name="email" value="" placeholder="">
                                </div>
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">Best Phone # <span style="color: red;">*</span></label>
                                    <input type="text" class="form-control" name="work_number" value="" placeholder="">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 input-padding">
                                    <label for="">Address <span style="color: red;">*</span></label>
                                    <input type="text" class="form-control" name="account_number" value="" placeholder="">
                                </div>
                            </div>


                            <h2><strong>SHIP TO INFORMATION</strong></h2>

                            <div class="row">
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">Date<span style="color: red;">*</span></label>
                                    <input type="date" class="form-control" name="" value="">
                                </div>
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">Business (IF APPLICABLE)</label>
                                    <input type="text" class="form-control" name="" value="" placeholder="">
                                </div>
                            </div>



                            <div class="row">
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">First name <span style="color: red;">*</span></label>
                                    <input type="text" class="form-control" name="billing_first_name" value="" placeholder="">
                                </div>
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">Last name </label>
                                    <input type="text" class="form-control" name="billing_last_name" value="" placeholder="">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">EMAIL ADDRESS <span style="color: red;">*</span></label>
                                    <input type="email" class="form-control" name="billing_email" value="" placeholder="">
                                </div>
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">BEST Phone # <span style="color: red;">*</span></label>
                                    <input type="text" class="form-control" name="billing_contact_number" value="" placeholder="">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 input-padding">
                                    <label for="">Ship To Address <span style="color: red;">*</span></label>
                                    <textarea class="form-control" name="billing_address_line_1" value=""></textarea>
                                </div>
                                <div class="col-12 input-padding">
                                    <h2><strong>ADDITIONAL SHIPPING INSTRUCTIONS</strong></h2>
                                    <p class="pb-3"><em> PLEASE INCLUDE ANY ADDITIONAL SHIPPING INSTRUCTIONS HERE (I.E. LIFT GATE REQUIRED, RESIDENTIAL, MILITARY, SCHOOL, CHURCH, RESTRICTED AREA OR ACCESS, ETC.) </em></p>
                                    <label for="">Shipping Instructions <span style="color: red;">*</span></label>
                                    <textarea class="form-control" name="billing_address_line_2" value=""></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 col-12 input-padding">
                                    <label for="">City <span style="color: red;">*</span> </label>
                                    <input type="text" class="form-control" name="billing_city" value="">
                                </div>
                                <div class="col-md-4 col-12 input-padding">
                                    <label for="">State <span style="color: red;">*</span></label>
                                    <input type="text" class="form-control" name="billing_state" value="">
                                </div>
                                <div class="col-md-4 col-12 input-padding">
                                    <label for="">Zip Code <span style="color: red;">*</span></label>
                                    <input type="text" class="form-control" name="billing_zip_code" value="">
                                </div>
                            </div>


                            <h2><strong>SHIP TO METHOD (PLEASE SELECT ONE)</strong></h2>
                            <div class="row pb-5">
                                <div class="form-check">
                                    <input class="custom-input form-check-input" type="radio" name="shipping_method" id="flexRadioDefault11" value="BESTWAY/PRE-PAY & ADD" checked>
                                    <label class="custom-label form-check-label" for="flexRadioDefault11">
                                        BESTWAY/PRE-PAY & ADD
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="custom-input form-check-input" type="radio" name="shipping_method" id="flexRadioDefault22" value="CUSTOMER PICK UP">
                                    <label class="custom-label form-check-label" for="flexRadioDefault22">
                                        CUSTOMER PICK UP
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="custom-input form-check-input" type="radio" name="shipping_method" id="flexRadioDefault33" value="YOUR OWN CARRIER">
                                    <label class="custom-label form-check-label" for="flexRadioDefault33">
                                        YOUR OWN CARRIER
                                    </label>
                                </div>
                            </div>


                            <table class="table custom-order-form-table" style="width:100%">
                                <thead>
                                    <tr>
                                        <th scope="col" style="width:4%" class="text-center">#</th>
                                        <th scope="col" style="width:10%">Item</th>
                                        <th scope="col" style="width:40%">Description</th>
                                        <th scope="col" style="width:11%">Model #</th>
                                        <th scope="col" style="width:13%">Unit Price</th>
                                        <th scope="col" style="width:11%">Quantity</th>
                                        <th scope="col" style="width:11%">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th class="cancel-line" onclick="addClone(this)">+</th>
                                        <td>
                                            <input class="form-control" type="text" name="item[]" placeholder="">
                                        </td>
                                        <td>
                                            <textarea class="form-control" id="" name="description[]" rows="1" placeholder="Enter description" data-gramm="false" wt-ignore-input="true"></textarea>
                                        </td>
                                        <td>
                                            <input class="form-control" type="text" name="model[]" placeholder="">
                                        </td>
                                        <td>
                                            <input class="form-control" type="text" name="unit_price[]" placeholder="0.00">
                                        </td>
                                        <td>
                                            <input class="form-control" type="text" name="quantity[]" placeholder="0.00">
                                        </td>
                                        <td>
                                            <input class="form-control" type="text" name="amount[]" placeholder="0.00">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>










                        </form>
                        <div class="inner-btns">
                            <a href="javascript:void(0);" id="online-confirm-form-btn" onclick="submitOnlineConfirmForm(this)"><i class="fas fa-envelope"></i> SUBMIT</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- online membership modal working -->
    <div class="request-form modal fade" id="online-membership-form" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body pt-0">
                    <div class="track-your-order-modal">
                        <form id="online-membership-form-element">
                            <h2><strong>RLM MEMBERSHIP FORM</strong></h2>
                            <div class="col-md-12 alert alert-danger online-membership-form-alert" style="display: none">
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-12input-padding">
                                    <label for="">DATE :</label>
                                    <input type="date" class="form-control" name="date" value="" placeholder="">
                                </div>

                                <div class="col-md-6 col-12input-padding">
                                    <label for="">COMPANY NAME (IF APPLICABLE):</label>
                                    <input type="text" class="form-control" name="company_name" placeholder="">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-12input-padding">
                                    <label for="">FIRST NAME <span style="color: red;">*</span></label>
                                    <input type="text" class="form-control" name="first_name" value="" placeholder="">
                                </div>
                                <div class="col-md-6 col-12input-padding">
                                    <label for="">LAST NAME<span style="color: red;">*</span></label>
                                    <input type="text" class="form-control" name="last_name" value="" placeholder="">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-12input-padding">
                                    <label for="">EMAIL ADDRESS <span style="color: red;">*</span></label>
                                    <input type="email" class="form-control" name="email" value="" placeholder="">
                                </div>
                                <div class="col-md-6 col-12input-padding">
                                    <label for="">WORK NUMBER <span style="color: red;">*</span></label>
                                    <input type="text" class="form-control" name="work_number" value="" placeholder="">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-12input-padding">
                                    <label for="">CELL NUMBER </label>
                                    <input type="text" class="form-control" name="cell_number" value="">
                                </div>
                                <div class="col-md-6 col-12input-padding">
                                    <label for="">FAX NUMBER</label>
                                    <input type="text" class="form-control" name="fax_number" value="">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-12input-padding">
                                    <label for="">OTHER NUMBER </label>
                                    <input type="text" class="form-control" name="other_number" value="">
                                </div>
                                <div class="col-md-6 col-12input-padding">
                                    <label for="">WEBSITE</label>
                                    <input type="text" class="form-control" name="website" value="">
                                </div>
                            </div>
                            <h2><strong>Billing Address</strong></h2>
                            <div class="row">
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">First name <span style="color: red;">*</span></label>
                                    <input type="text" class="form-control" name="billing_first_name" value="" placeholder="">
                                </div>
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">Last name <span style="color: red;">*</span></label>
                                    <input type="text" class="form-control" name="billing_last_name" value="" placeholder="">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">BEST EMAIL ADDRESS <span style="color: red;">*</span></label>
                                    <input type="email" class="form-control" name="billing_email" value="" placeholder="">
                                </div>
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">BEST CONTACT <span style="color: red;">*</span></label>
                                    <input type="text" class="form-control" name="billing_contact_number" value="" placeholder="">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">ADDRESS LINE 1 </label>
                                    <input type="text" class="form-control" name="billing_address_line_1" value="">
                                </div>
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">ADDRESS LINE 2</label>
                                    <input type="text" class="form-control" name="billing_address_line_2" value="">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 col-12 input-padding">
                                    <label for="">CITY </label>
                                    <input type="text" class="form-control" name="billing_city" value="">
                                </div>
                                <div class="col-md-4 col-12 input-padding">
                                    <label for="">STATE </label>
                                    <input type="text" class="form-control" name="billing_state" value="">
                                </div>
                                <div class="col-md-4 col-12 input-padding">
                                    <label for="">ZIP CODE</label>
                                    <input type="text" class="form-control" name="billing_zip_code" value="">
                                </div>
                            </div>
                            <h2><strong>Shipping Address</strong></h2>
                            <div class="row">
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">First name <span style="color: red;">*</span></label>
                                    <input type="text" class="form-control" name="shipping_first_name" value="" placeholder="">
                                </div>
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">Last name <span style="color: red;">*</span></label>
                                    <input type="text" class="form-control" name="shipping_last_name" value="" placeholder="">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">BEST EMAIL ADDRESS <span style="color: red;">*</span></label>
                                    <input type="email" class="form-control" name="shipping_email" value="" placeholder="">
                                </div>
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">BEST CONTACT <span style="color: red;">*</span></label>
                                    <input type="text" class="form-control" name="shipping_contact_number" value="" placeholder="">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">ADDRESS LINE 1 </label>
                                    <input type="text" class="form-control" name="shipping_address_line_1" value="">
                                </div>
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">ADDRESS LINE 2</label>
                                    <input type="text" class="form-control" name="shipping_address_line_2" value="">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 col-12 input-padding">
                                    <label for="">CITY </label>
                                    <input type="text" class="form-control" name="shipping_city" value="">
                                </div>
                                <div class="col-md-4 col-12 input-padding">
                                    <label for="">STATE </label>
                                    <input type="text" class="form-control" name="shipping_state" value="">
                                </div>
                                <div class="col-md-4 col-12 input-padding">
                                    <label for="">ZIP CODE</label>
                                    <input type="text" class="form-control" name="shipping_zip_code" value="">
                                </div>
                            </div>
                        </form>
                        <div class="inner-btns">
                            <a href="javascript:void(0);" id="online-membership-form-btn" onclick="submitOnlineMembershipForm(this)"><i class="fas fa-envelope"></i> SUBMIT</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- online request form modal working -->
    <div class="request-form modal fade" id="price-match-gurentee" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body pt-0">
                    <div class="track-your-order-modal">
                        <form id="price-match-gurantee-form-element">
                            <h2><strong>YOUR INFORMATION:</strong></h2>
                            <div class="col-md-12 alert alert-danger price-match-gurantee-form-alert" style="display: none">
                            </div>
                            <div class="row">
                                <div class="col input-padding">
                                    <label for="">Company name (IF APPLICABLE):</label>
                                    <input type="text" class="form-control" name="company_name" value="" placeholder="">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">FIRST NAME :</label>
                                    <input type="text" class="form-control" name="first_name" value="" placeholder="">
                                </div>
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">LAST NAME :</label>
                                    <input type="text" class="form-control" name="last_name" value="" placeholder="">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">EMAIL ADDRESS :</label>
                                    <input type="email" class="form-control" name="email" value="" placeholder="">
                                </div>
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">BEST PHONE NUMBER :</label>
                                    <input type="text" class="form-control" name="phone_number" value="" placeholder="">
                                </div>
                            </div>
                            <h2 class="mt-2"><strong>PRODUCT INFORMATION</strong></h2>
                            <div class="row">
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">Model #</label>
                                    <input type="text" class="form-control" name="model" value="">
                                </div>
                                <div class="col-md-6 col-12 input-padding">
                                    <label for="">Quantity <span style="color: red;">*</span></label>
                                    <input type="text" class="form-control" name="quantity" value="">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col input-padding">
                                    <label for="">HOW MUCH DID YOU SEE THIS PRODUCT FOR?</label>
                                    <input type="text" class="form-control" name="product_for" value="" placeholder="">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col input-padding">
                                    <label for="">PLEASE COPY URL (OR LINK) TO WHERE YOUR FOUND BETTER PRICING:</label>
                                    <input type="text" class="form-control" name="better_price_link" value="" placeholder="">
                                </div>
                            </div>
                            <div class="row mb-5">
                                <div class="col input-padding">
                                    <label for=""> PLEASE SELECT YOUR BEST CHOICE FOR COMMUNICATION:</label>
                                    <select name="communication_choice" id="" class="form-control">
                                        <option value="PHONE">PHONE</option>
                                        <option value="TEXT">TEXT</option>
                                        <option value="EMAIL">EMAIL</option>
                                    </select>
                                </div>
                            </div>

                        </form>
                        <div class="inner-btns">
                            <a href="javascript:void(0);" id="price-match-gurantee-form-btn" onclick="submitPriceMatchGuranteeForm(this)"><i class="fas fa-envelope"></i> SUBMIT</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- call-now modal -->
    <div class="call-now modal fade" id="call-now" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="call-now-modal">
                        <h2>CALL US</h2>
                        <a href="tel:+8774658581">
                            <i class="fa-solid fa-phone"></i>
                            <span>877.465.8581</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- text-now modal -->
    <div class="call-now modal fade" id="text-us" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="call-now-modal">
                        <h2>TEXT US</h2>
                        <a href="sms:4108496002">
                            <i class="fas fa-envelope"></i>
                            <span>4108496002</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- fax-now modal -->
    <div class="call-now modal fade" id="fax-us" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="call-now-modal">
                        <h2>FAX US</h2>
                        <a href="fax:2608882298">
                            <i class="fa-solid fa-fax"></i>
                            <span>2608882298</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>




    <!-- Mobile Tips Modal  -->
    <div class="already-place-an-order-modal modal fade" id="tips-mobile" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="rlm-update-inner rlm-advantages-main">
                        <ul>
                            <li>
                                <a href="javascript:void(0);">
                                    <h4>TIPS :</h4>
                                    <p class="my-2"><span>1)</span> Please make sure to provide your full
                                        shipping address so we may calculate freight for you
                                        (include if it is residential, commercial, and advise if any
                                        special requirements are necessary (lift gate, etc.)).</p>
                                    <p class="mb-2"><span>2)</span> Having a model # will always make things
                                        quicker.</p>
                                    <p class="mb-2"><span>3)</span> Always try to provide an accurate
                                        quantity. This helps us provide the best price, lead time,
                                        and shipping.</p>

                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Who we are Modal  -->
    <div class="already-place-an-order-modal modal fade" id="About-Vestil-MaNufacturing" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="rlm-update-inner rlm-advantages-main">
                        <ul>
                            <li>
                                <a href="javascript:void(0);">
                                    <h4> About Vestil Manufacturing :</h4>
                                    <p class="my-2"><span>• </span> Established in 1957.</p>
                                    <p class="my-2"><span>• </span> Go-to-Market Strategy. Only Sell through Resellers (No Direct Sales).</p>
                                    <p class="my-2"><span>• </span> Manufacturer & Master Distributor of Material Handling & Ergonomic Solutions.</p>
                                    <p class="my-2"><span>• </span> One Stop Shop with over 30,000 skus.</p>
                                    <p class="my-2"><span>• </span> All Products Meet OSHA & ANSI Standards.</p>
                                    <p class="my-2"><span>• </span> Custom Fabrications Available (Contact RLM for details).</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Why vestil products  -->
    <div class="already-place-an-order-modal modal fade" id="why-Vestil-Productss" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="rlm-update-inner rlm-advantages-main">
                        <ul>
                            <li>
                                <a href="javascript:void(0);">
                                    <h4> Why Vestil Products :</h4>
                                    <p class="my-2">MEETS OSHA & ANSI STANDARDS.</p>
                                    <p class="my-2">U.S. MANUFACTURED PRODUCTS & GLOBAL SOLUTIONS.</p>
                                    <p class="my-2">CUSTOM FABRICATIONS AVAILABLE UPON REQUEST.</p>
                                    <p class="my-2">"ONE STOP SHOP" - GET ALL THE ITEMS YOU NEED IN ONE PLACE….</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>





















    <script>
        var data = JSON.parse(@json($vacations));
    </script>

    <script src="{{ asset('front-assets/js/jquery-3.3.1.min.js') }}"></script>
    <script src="https://kit.fontawesome.com/5c90fb4b02.js" crossorigin="anonymous"></script>
    <script src="{{ asset('front-assets/js/jquery.fancybox.min.js') }}"></script>
    <script src="{{ asset('front-assets/js/popper-min.js') }}"></script>
    <script src="{{ asset('front-assets/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('front-assets/js/searchbar.js') }}"> </script>
    <script src="{{ asset('front-assets/js/aos.js') }}"> </script>
    <script src="{{ asset('front-assets/js/wow.min.js') }}"></script>
    <script src="https://momentjs.com/downloads/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
    <script src="{{ asset('front-assets/js/main.js') }}"></script>
    <script src="{{ asset('front-assets/js/owl.carousel.min.js') }}"></script>
    <script src="{{ asset('front-assets/js/axios.min.js' )}}"></script>
    <script src="{{ asset('front-assets/js/sweetalert.min.js' )}}"></script>
    <script>
        AOS.init({
            duration: 1200,
        });

        new WOW().init();

        window.scroll({
            behavior: 'smooth'
        });

        $('a[id^="openProdModal-"]').click(function() {
            const baseUrl = '<?php echo url('/'); ?>';
            var getId = $(this).attr('id').split('-')[1];

            $.ajax({
                url: baseUrl + '/get-list-products/' + getId,
                type: 'get',
                dataType: 'json',
                beforeSend: function() {

                    $('.modal-body #bodyRow').empty();
                    $('.modal-body #bodyRow').append(
                        '<div class="col-lg-12 text-center" ><h3 style="color:#8c0000">Gathering Data...</h3></div><div class="col-lg-12 text-center mb-0"><img src="' +
                        baseUrl + '/front-assets/images/loader/loading.gif"  height="auto"></div>');
                    $("#product-lisiting").modal();

                },
                success: function(res) {
                    $('.modal-body #bodyRow').empty();
                    let div = '<div class="col-md-12 text-center pb-4 pt-0"><h1 class="wow fadeInLeftBig"><span>' +
                        res.data.categoryName.toUpperCase() + '</span> PRODUCTS</h1></div>';
                    $(res.data.getProductList).each(function(index, val) {
                        div += '<div class="col-md-3">' + '<div class="product-inner-wrap">';
                        if (val.is_link == 1) {
                            div += '<a target="_blank" href="' + val.link + '">';
                        } else {
                            div += '<a href="' + baseUrl + '/get-child-product/' + val.id + '">';
                        }
                        div += '<div class="inner-image">' +
                            '<img src="' + baseUrl + '/admin-assets/images/product-images/' + val.image + '" class="img-fluid" />' +
                            '</div>' +
                            '</a>' +
                            '<h4>' + val.name + '</h4>' +
                            '<div class="read-more-btn">';
                        if (val.is_link == 1) {
                            div += '<a target="_blank" href="' + val.link +
                                '"> Product Detail <i class="fas fa-arrow-right"></i></a>';
                        } else {
                            div += '<a href="' + baseUrl + '/get-child-product/' + val.id +
                                '"> Product Detail <i class="fas fa-arrow-right"></i></a>';
                        }

                        div += '</div>' +
                            '</div>' +
                            '</div>';
                    });
                    $('.modal-body #bodyRow').append(div);
                },
                error: function() {
                    console.log('error while getting product list ');
                }
            })
        });

        $(document).on('click', function(event) {
            if ((!$(event.target).closest('.header-menulinks-main').length) && (!$(event.target).closest('.mobile-header-dropdown-main').length)) {
                $('.collapse').collapse('hide');
            }
        });

        $(".industry-inner").click(function() {
            $('.collapse').collapse('hide');
        });

        $("#why-choose-us").click(function() {
            $('html, body').animate({
                scrollTop: $(".firt-wrap").offset().top
            });
        });

        $(function() {
            $('#text-search').bind('keyup change', function(ev) {
                // pull in the new value
                var searchTerm = $(this).val();

                // remove any old highlighted terms
                $('body').removeHighlight();

                // disable highlighting if empty
                if (searchTerm) {
                    // highlight the new term
                    $('body').highlight(searchTerm);
                }
            });
        });
    </script>

    @stack('scripts')
    <script>
        let baseUrl = '{{url('')}}';

        function showModal(url) {
            $('#deal-and-discount-ida').modal('show');
            $('#urlSet').attr('href', url)
        }

        $(".custom-product-routing a").each(function() {

            $(this).attr('data-url', $(this).attr("href"));
            $(this).attr('href', '#');
            $(this).removeAttr('target');
            $(this).attr('onclick', 'return showModal($(this).data("url"))');

        });


        function addClone(input) {
            $(input).parent().after(`<tr>
                                    <th class="cancel-line" onclick="removeClone(this)">x</th>
                                    <td>
                                        <input class="form-control" type="text" name="item[]" placeholder="">
                                    </td>
                                    <td>
                                        <textarea class="form-control" id="" name="description[]" rows="1" placeholder="Enter description"></textarea>
                                    </td>
                                    <td>
                                        <input class="form-control" type="text" name="model[]" placeholder="">
                                    </td>
                                    <td>
                                        <input class="form-control" type="text" name="unit_price[]" placeholder="0.00">
                                    </td>
                                    <td>
                                        <input class="form-control" type="text" name="quantity[]" placeholder="0.00">
                                    </td>
                                    <td>
                                        <input class="form-control" type="text" name="amount[]" placeholder="0.00">
                                    </td>
                                </tr>`);

        }

        function removeClone(input) {
            $(input).parent().remove();
        }

        $('#placeAnOrder').on('hidden.bs.modal', function() {
            $("#placeAnOrder input,textarea").val("");
            $("#placeAnOrder table tbody").empty();
            $("#placeAnOrder table tbody").append(`<tr>
                                    <th class="cancel-line" onclick="addClone(this)">+</th>
                                    <td>
                                        <input class="form-control" type="text" name="item[]" placeholder="">
                                    </td>
                                    <td>
                                        <textarea class="form-control" id="" name="description[]" rows="1" placeholder="Enter description"></textarea>
                                    </td>
                                    <td>
                                        <input class="form-control" type="text" name="model[]" placeholder="">
                                    </td>
                                    <td>
                                        <input class="form-control" type="text" name="unit_price[]" placeholder="0.00">
                                    </td>
                                    <td>
                                        <input class="form-control" type="text" name="quantity[]" placeholder="0.00">
                                    </td>
                                    <td>
                                        <input class="form-control" type="text" name="amount[]" placeholder="0.00">
                                    </td>
                                </tr>`);
            $(".place-an-order-alert").empty();
            $(".place-an-order-alert").hide();
            $('#place-an-order-btn').attr('disabled', false);
            $(".loader_main_wrap").hide();
        });

        $('#online-request-form').on('hidden.bs.modal', function() {
            $("#online-request-form-element input,textarea").val("");
            $(".online-request-form-alert").empty();
            $(".online-request-form-alert").hide();
            $('#online-request-form-btn').attr('disabled', false);
            $(".loader_main_wrap").hide();
        });

        $('#online-confirm-form').on('hidden.bs.modal', function() {
            $("#online-confirm-form-element input,textarea").val("");
            $(".online-confirm-form-alert").empty();
            $(".online-confirm-form-alert").hide();
            $('#online-confirm-form-btn').attr('disabled', false);
            $(".loader_main_wrap").hide();
        });

        $('#online-membership-form').on('hidden.bs.modal', function() {
            $("#online-membership-form-element input,textarea").val("");
            $(".online-membership-form-alert").empty();
            $(".online-membership-form-alert").hide();
            $('#online-membership-form-btn').attr('disabled', false);
            $(".loader_main_wrap").hide();
        });

        $('#price-match-gurentee').on('hidden.bs.modal', function() {
            $("#price-match-gurantee-form-element input,textarea").val("");
            $(".price-match-gurantee-form-alert").empty();
            $(".price-match-gurantee-form-alert").hide();
            $('#price-match-gurantee-form-btn').attr('disabled', false);
            $(".loader_main_wrap").hide();
        });

        function submitPlaceAnOrder(input) {
            $(".loader_main_wrap").show();
            $('#place-an-order-btn').attr('disabled', true);
            $(".place-an-order-alert").empty();
            $(".place-an-order-alert").hide();
            axios.post(`${baseUrl}/place-an-order-handler`, $("#place-an-order-form").serialize()).then(function(response) {
                $(".loader_main_wrap").hide();
                swal({
                    title: response.data.msg,
                    icon: "success",
                    closeOnClickOutside: false
                }).then(() => window.location.reload());
            }).catch(function(error) {
                $.each(error.response.data.errors, function(k, v) {
                    $(".place-an-order-alert").append(`<li>${v[0]}</li>`);
                });
                $(".place-an-order-alert").show();
                $('#place-an-order-btn').attr('disabled', false);
                $(".loader_main_wrap").hide();
            });
        }

        function submitOnlineRequestForm(input) {
            $(".loader_main_wrap").show();
            $('#online-request-form-btn').attr('disabled', true);
            $(".online-request-form-alert").empty();
            $(".online-request-form-alert").hide();
            axios.post(`${baseUrl}/online-request-form-handler`, $("#online-request-form-element").serialize()).then(function(response) {
                $(".loader_main_wrap").hide();
                swal({
                    title: response.data.msg,
                    icon: "success",
                    closeOnClickOutside: false
                }).then(() => window.location.reload());
            }).catch(function(error) {
                $.each(error.response.data.errors, function(k, v) {
                    $(".online-request-form-alert").append(`<li>${v[0]}</li>`);
                });
                $(".online-request-form-alert").show();
                $('#online-request-form-btn').attr('disabled', false);
                $(".loader_main_wrap").hide();
            });
        }

        function submitOnlineConfirmForm(input) {
            $(".loader_main_wrap").show();
            $('#online-confirm-form-btn').attr('disabled', true);
            $(".online-confirm-form-alert").empty();
            $(".online-confirm-form-alert").hide();
            axios.post(`${baseUrl}/online-confirm-form-handler`, $("#online-confirm-form-element").serialize()).then(function(response) {
                $(".loader_main_wrap").hide();
                swal({
                    title: response.data.msg,
                    icon: "success",
                    closeOnClickOutside: false
                }).then(() => window.location.reload());
            }).catch(function(error) {
                $.each(error.response.data.errors, function(k, v) {
                    $(".online-confirm-form-alert").append(`<li>${v[0]}</li>`);
                });
                $(".online-confirm-form-alert").show();
                $('#online-confirm-form-btn').attr('disabled', false);
                $(".loader_main_wrap").hide();
            });
        }

        function submitOnlineMembershipForm(input) {
            $(".loader_main_wrap").show();
            $('#online-membership-form-btn').attr('disabled', true);
            $(".online-membership-form-alert").empty();
            $(".online-membership-form-alert").hide();
            axios.post(`${baseUrl}/online-membership-form-handler`, $("#online-membership-form-element").serialize()).then(function(response) {
                $(".loader_main_wrap").hide();
                swal({
                    title: response.data.msg,
                    icon: "success",
                    closeOnClickOutside: false
                }).then(() => window.location.reload());
            }).catch(function(error) {
                $.each(error.response.data.errors, function(k, v) {
                    $(".online-membership-form-alert").append(`<li>${v[0]}</li>`);
                });
                $(".online-membership-form-alert").show();
                $('#online-membership-form-btn').attr('disabled', false);
                $(".loader_main_wrap").hide();
            });
        }

        function submitPriceMatchGuranteeForm(input) {
            $(".loader_main_wrap").show();
            $('#price-match-gurantee-form-btn').attr('disabled', true);
            $(".price-match-gurantee-form-alert").empty();
            $(".price-match-gurantee-form-alert").hide();
            axios.post(`${baseUrl}/price-match-form-handler`, $("#price-match-gurantee-form-element").serialize()).then(function(response) {
                $(".loader_main_wrap").hide();
                $('#price-match-gurentee').modal("hide");
                swal({
                    title: response.data.msg,
                    icon: "success",
                    closeOnClickOutside: false
                }).then(() => window.location.reload());
            }).catch(function(error) {
                $.each(error.response.data.errors, function(k, v) {
                    $(".price-match-gurantee-form-alert").append(`<li>${v[0]}</li>`);
                });
                $(".price-match-gurantee-form-alert").show();
                $('#price-match-gurantee-form-btn').attr('disabled', false);
                $(".loader_main_wrap").hide();
            });
        }

        function handleNavBarCategoryRedirectionClasses(arr) {

            $(".header-menulinks-main .menu-links-main > .menu-main-card:eq(2) .menu-main-card").each(function() {
                if (!arr.includes($(this).find('h5').text().trim())) {

                    $(this).find("li").each(function(k, v) {
                        $(v).find("a").attr('href', $(v).find("a").data("url"));
                        $(v).find("a").removeAttr('onclick');
                    });
                }
            });
        }

        document.addEventListener("DOMContentLoaded", function() {
            handleNavBarCategoryRedirectionClasses([
                'Top Sellers',
                'Hot Commodities',
                'Featured Products',
                'Search For Vestil Products',
                'Why Vestil Products',
            ]);
        });

        function submitEmailSubscription() {
            $(this).attr('disabled', false);
            axios.post(`{{url('')}}/submit-email-subscription-request`, {
                email: $("#subscription-email").val()
            }).then(function(response) {
                swal({
                    title: response.data.msg,
                    icon: "success",
                    closeOnClickOutside: false
                }).then(() => window.location.reload());
            }).catch(function(error) {
                swal({
                    title: error.response.data.error,
                    icon: "error",
                    closeOnClickOutside: false
                });
                $(this).attr('disabled', false);
            });
        }
    </script>
</body>

</html>
