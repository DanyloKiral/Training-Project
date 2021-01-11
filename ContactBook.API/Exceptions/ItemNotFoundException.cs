﻿using System;

namespace ContactBook.API.Exceptions
{
    public class ItemNotFoundException : Exception
    {
        public ItemNotFoundException() : base()
        { }

        public ItemNotFoundException(string message) : base(message)
        { }
    }
}
