import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div>
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a class="sidebar-brand d-flex align-items-center justify-content-center">
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>

        <hr class="sidebar-divider my-0" />

        <li class="nav-item active">
          <a class="nav-link">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <hr class="sidebar-divider" />

        <div class="sidebar-heading">Interface</div>

        <li class="nav-item">
          <Link
            to="/users"
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <span>Users</span>
          </Link>
        </li>

        <li class="nav-item">
          <Link
            to="/employees"
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <span>Employees</span>
          </Link>
        </li>

        <hr class="sidebar-divider" />
      </ul>
    </div>
  );
}
