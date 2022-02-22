<style>
    .reply-menu-main {
        padding: 0px 0px;
        background-color: transparent;
        margin: 60px 0;
        border: 1px solid #ebedf2;
        border-radius: 4px;
    }

    .reply-head {
        padding: 15px;
        border-bottom: 1px solid #d9d9d9;
        color: #575962;
        font-size: 18px;
        font-weight: 600;
        border-radius: 3px;
    }

    label.status {
        margin-bottom: 0;
    }

    label.status span {
        font-weight: 500;
        color: #323a46;
        font-size: 16px;
        margin-top: 20px;
        margin-bottom: 5px;
    }

    .reply-menu-main .form-control:focus {
        color: #000;
        background-color: #ffffff;

    }

    .status-form {
        padding: 0 15px;
    }

    .status-form button.btn {
        color: #fff;
        background-color: #4ca3f7;
        border-color: #409df7;
    }

    .time-sections .date-TimE span.inner-time-content {
        border-radius: 4px;
        background-color: #ff4040;
        display: inline-block;
        font-weight: 600;
        padding: 5px;
        color: #fff;
        padding: 10px 20px;
    }

    .time-sections .time-line:before {
        border-radius: 0.25rem;
        background: #dee2e6;
        bottom: 0;
        content: '';
        left: 31px;
        margin: 0;
        position: absolute;
        top: 44px;
        width: 4px;
    }

    .time-line .time-line-content {
        justify-content: space-between;
        box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
        border-radius: 0.25rem;
        background: #fff;
        color: #495057;
        margin-left: 60px;
        margin-right: 0px;
        margin-top: 50px;
        padding: 10px 0;
        position: relative;
    }


    .time-line-content .timeline-header h3 {
        display: inline-flex;
        font-size: 15px;
        align-items: center;
    }

    .time-line-content .timeline-header h3 span {
        color: #71b6f9;
        margin-right: 10px;
    }

    .time-line-content .time-line-footer h3 {
        color: #495057;
        font-size: 14px;
        display: flex;
        align-items: center;
    }

    .time-line-content .time-line-footer {
        display: flex;
        justify-content: space-between;
    }


    .timeline-header {
        padding: 0px 10px 5px;
        border-bottom: 2px solid #ededed;
    }

    .time-line-body {
        padding: 10px 10px 5px;
    }

    .time-line-footer {
        padding: 10px 10px 5px;

    }

    span.open-close {
        background: #ff4040;
        color: #fff;
        padding: 5px 10px;
        text-align: center;
        border-radius: 4px;
        margin: 0 15px;
    }

    .time-line .msg-icon {
        position: absolute;
        left: 19px;
        background: #007bff;
        padding: 2px 6px;
        border-radius: 50%;
        color: #fff;
        font-size: 15px;
    }

    .time-line .msg-icon.chat {
        font-size: 16px;
        margin-top: 54px;
        left: 18px;
        padding: 2px 5px;
        background: gray;
        color: #fff;
    }

    .time-line .reply-btn {
        font-size: 16px;
        left: 5px;
        padding: 2px 9px;
        background: #dbdbdb;
        color: #808080;
        position: absolute;
        border-radius: 4px;
        margin-top: 10px;
    }

    .time-line a.edit {
        background-color: #35b8e0;
        color: #fff;
        padding: 5px 12px;
        border-radius: 4px;
        margin: 0 10px 0 20px;
    }

    .time-line a.delete {
        background-color: #ff5b5b;
        color: #fff;
        padding: 5px 12px;
        border-radius: 4px;
        margin: 0 10px 0 0;
    }

    .time-sections {
        position: relative;
    }

    h2.offer-table-heading-h2 {
        color: #2a5ead;
        font-size: 42px;
    }

    .time-line .reply-btn p {
        margin-bottom: 0;
    }
</style>




        <!-- message components  -->
        <div class="time-sections">
            <div class="date-TimE">
                <span class="inner-time-content">Thu, Feb 17, 2022 09:18:11 AM</span>
            </div>
            <div class="time-line here-div">
                <div class="msg-icon">
                    <i class="fas fa-envelope"></i>
                </div>
                <div class="time-line-content">
                    <div class="timeline-header">
                        <h3>
                            <span class="name"> Frank Millar (Advisor) </span>
                            generated a ticket for support
                        </h3>
                        <span class="float-right"> <i class="fa fa-clock-o"></i> 5 Days ago</span>
                    </div>
                    <div class="time-line-body">
                        <h6>team is inquiring about this will update you with your request.</h6>
                    </div>
                    <div class="time-line-footer">
                        <h3> Status: <span class="open-close SpanTicketStatus">open </span></h3>
                    </div>
                </div>
                <div class="reply-btn ">
                    <p>Reply</p>
                </div>
                <div class="msg-icon chat">
                    <i class="fas fa-comments"></i>
                </div>
                <div class=" time-line-content">
                    <div class="timeline-header">
                        <h3><span class="name"> Pierre Taillefer (Broker)</span> commented on ticket</h3>
                        <span class="float-right">
                            <i class="fas fa-clock" aria-hidden="true"></i> Thu, Feb 17, 2022 09:28:24 AM</span>
                    </div>
                    <div class="time-line-body pb-5">
                        <h6>do update ASAP</h6>
                    </div>
                </div>
            </div>
        </div>


        <!-- reply components -->

        <div class="reply-menu-main">
            <div class="reply-head">
                <i class="fa-solid fa-pen"></i> &nbsp; Reply Ticket
            </div>
            <div class="row mt-4 ml-2 mr-2">
                <div class="col-lg-12">
                    <textarea style="resize: none;" id="commentTicketMessage" rows="5" name="commentTicketMessage" class="form-control"></textarea>
                </div>
            </div>
            <div class="form-group status-form">
                <label class="status"><span>Status</span></label>
                <select class="form-control" id="commentTicketStatus" name="commentTicketStatus">
                    <option value="">Select Status</option>
                    <option value="closed">Closed</option>
                </select>
                <div class="mt-4">
                    <div id="errorDiv" style="color:red; display:none;"></div>
                </div>
                <button id="btnSubmitComment" class="btn btn-primary mt-2">Submit Reply</button>
            </div>
        </div>

 
