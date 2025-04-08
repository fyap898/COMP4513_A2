# COMP 4513 Assignment 2
Author: Felix Yap  
Instructor: Randy Connolly

## Details
This web application allows user to view data of an art dashboard where it is populated by retrieving data from supabase API that created in Assignment 1.

## URL to working web app
https://flourishing-starburst-48b7b3.netlify.app/

## Limitations
Issue on gallery place web link:
- Due to public APIs being deprecated by Yahoo, Yahoo WOE ID does not applied completely.
- Same reason for Flickr Place, Flickr Place ID of galleries might not be working as well.
Issue on adding to or removing from favourite:
- Unable to provide multi selection for adding and removing option due to time limit and lack of planning. 
Issues occur when page refreshed, undid, redid:
- Items that added to Favourite list will be erased/lost.
- Credentials that are previously registered will be erased/lost as well.
- User will be forced log out of the dashboard.

## Folders "/src/Components"
- Artist
- Gallery
- Genre
- Painting
- Favourite
- PopUp
