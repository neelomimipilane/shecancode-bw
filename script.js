// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Forum functionality
document.addEventListener('DOMContentLoaded', function() {
    const newTopicBtn = document.getElementById('newTopicBtn');
    const newTopicModal = document.getElementById('newTopicModal');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    const newTopicForm = document.querySelector('.new-topic-form');

    // Open modal
    if (newTopicBtn) {
        newTopicBtn.addEventListener('click', function() {
            newTopicModal.classList.add('active');
        });
    }

    // Close modal
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            newTopicModal.classList.remove('active');
        });
    });

    // Close modal when clicking outside
    newTopicModal.addEventListener('click', function(e) {
        if (e.target === newTopicModal) {
            newTopicModal.classList.remove('active');
        }
    });

    // Handle form submission
    if (newTopicForm) {
        newTopicForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const title = document.getElementById('topicTitle').value;
            const category = document.getElementById('topicCategory').value;
            const content = document.getElementById('topicContent').value;

            // Here you would typically send the data to your backend
            console.log('New topic:', { title, category, content });
            
            // Show success message
            alert('Your discussion topic has been posted successfully!');
            
            // Reset form and close modal
            newTopicForm.reset();
            newTopicModal.classList.remove('active');
        });
    }

    // Make category cards clickable
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('h3').textContent;
            alert(`Navigating to ${categoryName} discussions...`);
            // In a real implementation, this would navigate to the category page
        });
    });

    // Make discussion items clickable
    const discussionItems = document.querySelectorAll('.discussion-item');
    discussionItems.forEach(item => {
        item.addEventListener('click', function() {
            const topicTitle = this.querySelector('h4').textContent;
            alert(`Opening discussion: ${topicTitle}`);
            // In a real implementation, this would open the discussion thread
        });
    });

    // Tag click functionality
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            const tagName = this.textContent;
            alert(`Searching for topics with tag: ${tagName}`);
            // In a real implementation, this would filter discussions by tag
        });
    });
});

// Sample data for demonstration (in a real app, this would come from a backend)
const sampleDiscussions = [
    {
        id: 1,
        title: "How to start with Python as a complete beginner?",
        author: "Sarah M.",
        time: "2 hours ago",
        replies: 15,
        category: "programming"
    },
    {
        id: 2,
        title: "Internship opportunities in Gaborone",
        author: "Amantle K.",
        time: "5 hours ago",
        replies: 8,
        category: "career"
    },
    {
        id: 3,
        title: "Web development project ideas for portfolio",
        author: "Boipelo T.",
        time: "1 day ago",
        replies: 22,
        category: "programming"
    }
];