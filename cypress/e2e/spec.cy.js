describe('Portfolio Application - Complete E2E Tests', () => {
  const baseUrl = 'http://localhost:5173'
  
  // Admin credentials
  const adminEmail = 'yusra@gmail.com'
  const adminPassword = '123456'
  
  // New user for signup test
  const newUser = {
    name: 'Test User Cypress',
    email: `testuser${Date.now()}@example.com`,
    password: 'testpass123'
  }

  // Test 1: Home Page
  it('should load the home page successfully', () => {
    cy.visit(baseUrl)
    cy.url().should('eq', `${baseUrl}/`)
    cy.contains('Home').should('be.visible')
    cy.contains('About').should('be.visible')
    cy.contains('Services').should('be.visible')
    cy.contains('Projects').should('be.visible')
    cy.contains('Contact').should('be.visible')
  })

  // Test 2: Navigation - Services Page
  it('should navigate to Services page and display services', () => {
    cy.visit(baseUrl)
    cy.contains('Services').click()
    cy.url().should('include', '/services')
    
    // Check if services are displayed
    cy.contains('My Services').should('be.visible')
    cy.contains('Web Development').should('be.visible')
    cy.contains('Quality Assurance & Testing').should('be.visible')
    cy.contains('Software Development').should('be.visible')
  })

  // Test 3: Sign Up - Create New User
  it('should sign up a new user successfully', () => {
    cy.visit(baseUrl)
    cy.contains('Sign Up').click()
    cy.url().should('include', '/signup')
    
    // Fill signup form
    cy.get('input[name="name"]').type(newUser.name)
    cy.get('input[name="email"]').type(newUser.email)
    cy.get('input[name="password"]').type(newUser.password)
    
    // Submit signup form
    cy.get('button[type="submit"]').click()
    
    // Wait for signup to complete
    cy.wait(2000)
  })

  // Test 4: Sign In as Admin
  it('should sign in as admin successfully', () => {
    cy.visit(baseUrl)
    cy.contains('Sign In').click()
    cy.url().should('include', '/signin')
    
    // Fill signin form
    cy.get('input[name="email"]').clear().type(adminEmail)
    cy.get('input[name="password"]').clear().type(adminPassword)
    
    // Submit signin form
    cy.get('button[type="submit"]').click()
    
    // Wait for login and check if redirected to home
    cy.wait(2000)
    cy.url().should('eq', `${baseUrl}/`)
    
    // Verify admin is logged in
    cy.contains('Hi, Yusra').should('be.visible')
    cy.contains('Admin').should('be.visible')
  })

  // Test 5: Admin - Navigate to Manage Projects Page
  it('should navigate to Manage Projects page as admin', () => {
    // Login as admin first
    cy.visit(baseUrl)
    cy.contains('Sign In').click()
    cy.get('input[name="email"]').type(adminEmail)
    cy.get('input[name="password"]').type(adminPassword)
    cy.get('button[type="submit"]').click()
    cy.wait(2000)
    
    // Click Admin dropdown and wait for it to be visible
    cy.contains('Admin').click()
    cy.wait(500)
    
    // Force click on Manage Projects (because dropdown might be hidden)
    cy.contains('Manage Projects').click({ force: true })
    
    // Verify we're on manage projects page
    cy.wait(1000)
    cy.contains('Admin – Manage Projects').should('be.visible')
    cy.contains('+ Add New Project').should('be.visible')
    
    // Verify existing projects are displayed
    cy.contains('Task Manager Dashboard').should('be.visible')
  })

  // Test 6: Admin - Navigate to Manage Contacts
  it('should view and manage contacts as admin', () => {
    // Login as admin
    cy.visit(baseUrl)
    cy.contains('Sign In').click()
    cy.get('input[name="email"]').type(adminEmail)
    cy.get('input[name="password"]').type(adminPassword)
    cy.get('button[type="submit"]').click()
    cy.wait(2000)
    
    // Navigate to Manage Contacts
    cy.contains('Admin').click()
    cy.wait(500)
    cy.contains('Manage Contacts').click({ force: true })
    
    // Verify we're on manage contacts page
    cy.wait(1000)
    
    // Check if contacts are displayed
    // Look for Delete buttons which indicate contacts are shown
    cy.get('button').contains('Delete').should('exist')
  })

  // Test 7: Regular User - View Projects from Database
  it('should view projects from database when logged in', () => {
    // Login as admin
    cy.visit(baseUrl)
    cy.contains('Sign In').click()
    cy.get('input[name="email"]').type(adminEmail)
    cy.get('input[name="password"]').type(adminPassword)
    cy.get('button[type="submit"]').click()
    cy.wait(2000)
    
    // Navigate to Projects page
    cy.contains('Projects').click()
    cy.wait(1000)
    
    // Verify "Projects from Database" section is visible
    cy.contains('Projects from Database').should('be.visible')
    
    // Verify database projects are displayed
    cy.contains('Task Manager Dashboard').should('be.visible')
    cy.contains('Weather Forecast App').should('be.visible')
  })

  // Test 8: Contact Form - Submit Form
  it('should submit contact form successfully', () => {
    cy.visit(`${baseUrl}/contact`)
    
    cy.contains('Send Me a Message').should('be.visible')
    cy.contains('Get In Touch').should('be.visible')
    
    // Verify contact info is displayed
    cy.contains('tawuti@my.centennialcollege.ca').should('be.visible')
    cy.contains('647-448-6987').should('be.visible')
    
    // Fill contact form
    cy.get('input[name="firstName"]').type('Cypress')
    cy.get('input[name="lastName"]').type('E2E')
    cy.get('input[name="email"]').type('cypress.e2e@test.com')
    cy.get('input[name="phone"]').type('9876543210')
    cy.get('input[name="subject"]').type('E2E Testing Portfolio')
    cy.get('textarea[name="message"]').type('This is an automated end-to-end test message submitted via Cypress testing framework.')
    
    // Submit form
    cy.get('button[type="submit"]').click()
    
    cy.wait(2000)
    
    // Should redirect to home
    cy.url().should('eq', `${baseUrl}/`)
  })

  // Test 9: Verify Contact Was Saved (Admin Check)
  it('should verify contact form submission appears in admin panel', () => {
    // Login as admin
    cy.visit(baseUrl)
    cy.contains('Sign In').click()
    cy.get('input[name="email"]').type(adminEmail)
    cy.get('input[name="password"]').type(adminPassword)
    cy.get('button[type="submit"]').click()
    cy.wait(2000)
    
    // Navigate to Manage Contacts
    cy.contains('Admin').click()
    cy.wait(500)
    cy.contains('Manage Contacts').click({ force: true })
    cy.wait(1500)
    
    // Look for the contact we just submitted
    cy.contains('Cypress E2E').should('be.visible')
    cy.contains('cypress.e2e@test.com').should('be.visible')
  })

  // Test 10: Complete User Journey
  it('should complete full user journey through the portfolio', () => {
    // Start at home
    cy.visit(baseUrl)
    
    // Navigate through all pages
    cy.contains('About').click()
    cy.wait(500)
    
    cy.contains('Services').click()
    cy.contains('Web Development').should('be.visible')
    cy.wait(500)
    
    cy.contains('Projects').click()
    cy.wait(500)
    
    cy.contains('Contact').click()
    cy.contains('Send Me a Message').should('be.visible')
    
    // Return to Home
    cy.contains('Home').click()
    cy.url().should('eq', `${baseUrl}/`)
  })

  // Test 11: Sign Out
  it('should sign out successfully', () => {
    // Login first
    cy.visit(baseUrl)
    cy.contains('Sign In').click()
    cy.get('input[name="email"]').type(adminEmail)
    cy.get('input[name="password"]').type(adminPassword)
    cy.get('button[type="submit"]').click()
    cy.wait(2000)
    
    // Verify logged in
    cy.contains('Hi, Yusra').should('be.visible')
    
    // Sign out
    cy.contains('Sign Out').click()
    cy.wait(1000)
    
    // Verify signed out - should see Sign In button again
    cy.contains('Sign In').should('be.visible')
  })

  // Test 12: Navigation Consistency
  it('should display consistent navigation across all pages', () => {
    const pages = ['/', '/about', '/services', '/projects', '/contact']
    
    pages.forEach(page => {
      cy.visit(`${baseUrl}${page}`)
      cy.contains('Home').should('be.visible')
      cy.contains('About').should('be.visible')
      cy.contains('Services').should('be.visible')
      cy.contains('Projects').should('be.visible')
      cy.contains('Contact').should('be.visible')
    })
  })
})