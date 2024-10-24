<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Models\Contact;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', []);
    }

    public function contactStore(StoreContactRequest $request)
    {
        $validated = $request->validated();
        $contact = Contact::create($request->all());
    }
}
