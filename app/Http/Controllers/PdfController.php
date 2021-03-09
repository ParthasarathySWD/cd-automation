<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use PDF;
class PdfController extends Controller
{
/**
  * Display a listing of the resource.

     *

     * @return \Illuminate\Http\Response

     */

    public function generatePDF()
    {

        $data = ['title' => 'Welcome'];
        $pdf = PDF::loadView('CDDocument', $data);
        return $pdf->download('CDDetails.pdf');
    }
}