
@extends('layouts/app')

@section('title', 'Companies')

@section('content')
<section class="user-panel-main">
    <div class="container">
        <div class="row">
            <div class="col-md-3 user-panel-left">
                <nav>
                    <ul class="user-panel-links">
                        <li><a href="{{url('/location')}}" class="active">Locations</a></li>
                        <li><a href="{{url('/update_account')}}">Update Account</a></li>
                        <li><a href="{{url('/charge_account')}}"> Charge Account</a></li> 
                        <li><a href="{{url('/transaction_summary')}}">Transaction Summary</a></li>
                        <li><a href="{{url('/credit_card_transactions')}}">Credit Card Transactions</a></li>
                        <li><a href="{{url('/')}}">LOGOUT</a></li>
                    </ul>
                </nav>
            </div>
            <div class="col-md-9">
                  <form action="" class="user-panel-form">
                    <div class="row">
                        <div class="col-12 mb-4">
                            <h2 class="">Locations</h2>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="">Category <span>*</span></label>
                            <input class="form-control" id="category" type="text" placeholder="Select Category">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="">#1</label>
                           <select class="form-control">
                              <option value="" disabled selected hidden>Select Option ...</option>
                              <option value="">Yes</option>
                              <option value="">No</option>
                            </select>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="">State <span>*</span></label>
                             <input class="form-control" id="" type="text" placeholder=" Select State">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="">City <span>*</span></label>
                            <input type="text" id="" class="form-control" placeholder="Select City">
                        </div>
                        <div class="col-12 mt-3">
                            <button type="submit">Filter</button>
                            <button type="submit">Clear</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</section>
@endsection






