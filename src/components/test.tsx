import React from 'react'

export const test = () => {
    return (
        <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST" onsubmit="generateSignature()" target="_blank">

        <br><br><table >
            <tbody><tr>
                <td> <strong>Parameter </strong> </td>
                <td><strong>Value</strong></td>
            </tr>
    
            <tr>
                <td>Amount:</td>
                <td> <input type="text" id="amount" name="amount" value="100" class="form" required=""> <br>
                </td>
            </tr>
    
            <tr>
                <td>Tax Amount:</td>
                <td><input type="text" id="tax_amount" name="tax_amount" value="0" class="form" required="">
                </td>
            </tr>
    
            <tr>
                <td>Total Amount:</td>
                <td><input type="text" id="total_amount" name="total_amount" value="100" class="form" required="">
                </td>
            </tr>
    
            <tr>
                <td>Transaction UUID:</td>
                <td><input type="text" id="transaction_uuid" name="transaction_uuid" value="11-200-111sss1" class="form" required=""> </td>
            </tr>
    
            <tr>
                <td>Product Code:</td>
                <td><input type="text" id="product_code" name="product_code" value="EPAYTEST" class="form" required=""> </td>
            </tr>
    
            <tr>
                <td>Product Service Charge:</td>
                <td><input type="text" id="product_service_charge" name="product_service_charge" value="0" class="form" required=""> </td>
            </tr>
    
            <tr>
                <td>Product Delivery Charge:</td>
                <td><input type="text" id="product_delivery_charge" name="product_delivery_charge" value="0" class="form" required=""> </td>
            </tr>
    
            <tr>
                <td>Success URL:</td>
                <td><input type="text" id="success_url" name="success_url" value="https://google.com" class="form" required=""> </td>
            </tr>
    
            <tr>
                <td>Failure URL:</td>
                <td><input type="text" id="failure_url" name="failure_url" value="https://facebook.com" class="form" required=""> </td>
            </tr>
    
            <tr>
                <td>signed Field Names:</td>
                <td><input type="text" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" class="form" required=""> </td>
            </tr>
    
            <tr>
                <td>Signature:</td>
                <td><input type="text" id="signature" name="signature" value="4Ov7pCI1zIOdwtV2BRMUNjz1upIlT/COTxfLhWvVurE=" class="form" required=""> </td>
            </tr>
            <tr>
                <td>Secret Key:</td>
                <td><input type="text" id="secret" name="secret" value="8gBm/:&EnhH.1/q" class="form" required="">
                </td>
            </tr>
            
        </tbody></table>
        <input value=" Pay with eSewa " type="submit" class="button" style="display:block !important; background-color: #60bb46; cursor: pointer; color: #fff; border: none; padding: 5px 10px;'" />
    </form>
    )
}
        <tbody><tr>
            <td> <strong>Parameter </strong> </td>
            <td><strong>Value</strong></td>
        </tr>

        <tr>
            <td>Amount:</td>
            <td> <input type="text" id="amount" name="amount" value="100" class="form" required=""> <br>
            </td>
        </tr>

        <tr>
            <td>Tax Amount:</td>
            <td><input type="text" id="tax_amount" name="tax_amount" value="0" class="form" required="">
            </td>
        </tr>

        <tr>
            <td>Total Amount:</td>
            <td><input type="text" id="total_amount" name="total_amount" value="100" class="form" required="">
            </td>
        </tr>

        <tr>
            <td>Transaction UUID:</td>
            <td><input type="text" id="transaction_uuid" name="transaction_uuid" value="11-200-111sss1" class="form" required=""> </td>
        </tr>

        <tr>
            <td>Product Code:</td>
            <td><input type="text" id="product_code" name="product_code" value="EPAYTEST" class="form" required=""> </td>
        </tr>

        <tr>
            <td>Product Service Charge:</td>
            <td><input type="text" id="product_service_charge" name="product_service_charge" value="0" class="form" required=""> </td>
        </tr>

        <tr>
            <td>Product Delivery Charge:</td>
            <td><input type="text" id="product_delivery_charge" name="product_delivery_charge" value="0" class="form" required=""> </td>
        </tr>

        <tr>
            <td>Success URL:</td>
            <td><input type="text" id="success_url" name="success_url" value="https://google.com" class="form" required=""> </td>
        </tr>

        <tr>
            <td>Failure URL:</td>
            <td><input type="text" id="failure_url" name="failure_url" value="https://facebook.com" class="form" required=""> </td>
        </tr>

        <tr>
            <td>signed Field Names:</td>
            <td><input type="text" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" class="form" required=""> </td>
        </tr>

        <tr>
            <td>Signature:</td>
            <td><input type="text" id="signature" name="signature" value="4Ov7pCI1zIOdwtV2BRMUNjz1upIlT/COTxfLhWvVurE=" class="form" required=""> </td>
        </tr>
        <tr>
            <td>Secret Key:</td>
            <td><input type="text" id="secret" name="secret" value="8gBm/:&EnhH.1/q" class="form" required="">
            </td>
        </tr>
        
    </tbody></table>
    <input value=" Pay with eSewa " type="submit" class="button" style="display:block !important; background-color: #60bb46; cursor: pointer; color: #fff; border: none; padding: 5px 10px;'">
</form>



    )
    }

export default test